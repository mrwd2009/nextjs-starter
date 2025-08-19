const envObj = process.env;
const appTenant = envObj.APP_TENANT || 'impl';

const appEnv = `${appTenant}-${envObj.NODE_ENV || 'development'}`;

const serverConfig = {
  appEnv,
  isServerProd: envObj.NODE_ENV === 'production',
  trpc: {
    basePath: '/api/trpc',
  },
  client: {
    basePath: '/apps/partner-portal',
  },
  cookie: {
    secret: envObj.APP_COOKIE_KEYS!,
  },
  rateLimit: {
    coookieKey: `cfex-apps-partner-portal-${appEnv}-rl`,
    redisKeyPrefix: `cfex-apps-partner-portal-${appEnv}-rl-`,
    expiredHour: 24 * 30,
    byID: {
      // limited by id from cookie
      points: 5 * 60, // times
      duration: 60, // second
    },
  },
  jwt: {
    secretType: 'asymmetric',
    cookieKey: `cfex-apps-partner-portal-${appEnv}-session`,
    issuer: 'partner-portal@cfexcloud.com',
    audience: 'cfexcloud.com',
    expireHour: 8,
    asymmetricSecret: {
      private: envObj.APP_JWT_SECRET_PRIVATE!,
      public: envObj.APP_JWT_SECRET_PUBLIC!,
    },
  },
  jwe: {
    secret: envObj.APP_JWE_SECRET!,
  },
  redis: {
    main: {
      url: envObj.APP_MAIN_REDIS_URL || 'redis://localhost:6379',
      prefix: `cfex-apps-partner-portal-${appEnv}-main-`,
      expired: 3600,
    },
  },
  datasource: {
    main: {
      type: 'mysql' as const,
      poolSize: 10,
      host: envObj.APP_MAIN_DB_HOST!,
      port: 3306,
      username: envObj.APP_MAIN_DB_USER!,
      password: envObj.APP_MAIN_DB_PASSWORD!,
      database: envObj.APP_MAIN_DB_NAME!,
    },
  },
};

export type ServerConfig = typeof serverConfig;

export default serverConfig;
