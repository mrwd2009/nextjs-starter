import { createTrpcMiddleware } from '../trpc';
import serverConfig from '@/server/config/server-config';
import { RateLimitError } from '@/server/lib/error';
import { decryptJweMsg, getJwtTokenPlayload } from '@/server/lib/jwt-utils';
import {
  getCookieValue,
  getSecuredCookieValue,
  setSecuredCookieValue,
} from '@/server/lib/cookie-utils';
import { nanoid } from 'nanoid';
import rateLimiter from '../../rate-limiter/rate-limiter';
import { RateLimiterRes } from 'rate-limiter-flexible';

const rateLimiterHandler = createTrpcMiddleware(async ({ next, ctx }) => {
  let uuid = '';
  const token = getCookieValue({
    headers: ctx.req.headers,
    cookieKey: serverConfig.jwt.cookieKey,
  });
  const payload = getJwtTokenPlayload(token);
  if (payload?.userEmail) {
    try {
      const decryptedEmail = await decryptJweMsg({
        secret: serverConfig.jwe.secret,
        encryptedMsg: payload.userEmail as string,
      });
      uuid = decryptedEmail;
    } catch (error) {
      if (!serverConfig.isServerProd) {
        throw error;
      }
    }
  } else {
    const cookieId = getSecuredCookieValue({
      headers: ctx.req.headers,
      cookieKey: serverConfig.rateLimit.coookieKey,
      cookieSecret: serverConfig.cookie.secret,
    });
    if (cookieId) {
      uuid = cookieId;
    } else {
      setSecuredCookieValue({
        headers: ctx.resHeaders,
        cookieKey: serverConfig.rateLimit.coookieKey,
        cookieSecret: serverConfig.cookie.secret,
        value: nanoid(),
        secure: serverConfig.isServerProd,
        maxAge: serverConfig.rateLimit.expiredHour * 3600,
        path: serverConfig.client.basePath,
      });
    }
  }

  if (!uuid) {
    return await next();
  }

  const updateLimitHeader = (info: RateLimiterRes) => {
    // if it's not RateLimiterRes
    if (!('msBeforeNext' in info)) {
      return;
    }
    ctx.resHeaders.set('X-RateLimit-Limit', `${info.remainingPoints + info.consumedPoints}`);
    ctx.resHeaders.set('X-RateLimit-Remaining', `${info.remainingPoints}`);
    ctx.resHeaders.set(
      'X-RateLimit-Reset',
      `${Math.ceil(new Date().getTime() / 1000 + info.msBeforeNext / 1000)}`,
    );
  };

  try {
    const info = await rateLimiter.consume(uuid);
    updateLimitHeader(info);
    return await next();
  } catch (error) {
    updateLimitHeader(error as RateLimiterRes);
    throw new RateLimitError('Too many requests, please try again later.');
  }
});

export default rateLimiterHandler;
