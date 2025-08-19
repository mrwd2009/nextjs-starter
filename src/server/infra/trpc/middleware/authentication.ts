import { createTrpcMiddleware } from '../trpc';
import serverConfig from '@/server/config/server-config';
import { AuthError } from '@/server/lib/error';
import { decryptJweMsg, verfyToken } from '@/server/lib/jwt-utils';
import { getCookieValue } from '@/server/lib/cookie-utils';

const authentication = createTrpcMiddleware(async ({ next, ctx }) => {
  const token = getCookieValue({
    headers: ctx.req.headers,
    cookieKey: serverConfig.jwt.cookieKey,
  });
  if (!token) {
    throw new AuthError('Missing session token');
  }
  try {
    const payload = await verfyToken({
      token,
      secret: serverConfig.jwt.asymmetricSecret.public,
      issuer: serverConfig.jwt.issuer,
      audience: serverConfig.jwt.audience,
    });
    const decryptedEmail = await decryptJweMsg({
      secret: serverConfig.jwe.secret,
      encryptedMsg: payload.userEmail as string,
    });
    ctx.user = {
      email: decryptedEmail,
      name: payload.userName as string,
      roles: payload.userRoles as string[],
    };
    return await next();
  } catch (error) {
    throw new AuthError((error as Error).message);
  }
});

export default authentication;
