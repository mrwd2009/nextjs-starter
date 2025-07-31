import Redis from 'ioredis';
import serverConfig from '@/server/config/server-config';
import { RateLimiterRedis, RateLimiterMemory, RateLimiterAbstract } from 'rate-limiter-flexible';

let rateLimiter: RateLimiterAbstract;

if (serverConfig.isServerProd) {
  rateLimiter = new RateLimiterRedis({
    storeClient: new Redis(serverConfig.redis.main.url),
    keyPrefix: serverConfig.rateLimit.redisKeyPrefix,
    points: serverConfig.rateLimit.byID.points,
    duration: serverConfig.rateLimit.byID.duration,
  });
} else {
  rateLimiter = new RateLimiterMemory({
    points: serverConfig.rateLimit.byID.points,
    duration: serverConfig.rateLimit.byID.duration,
  });
}

export default rateLimiter;
