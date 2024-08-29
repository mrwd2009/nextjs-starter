const appProperties = {
  isProd: process.env.NODE_ENV === 'production',
  basePath: {
    trpc: '/api/trpc',
  },
  privateInfo: process.env.PRIVATE_INFO,
  publicInfo: process.env.NEXT_PUBLIC_CLIENT_INFO,
};

export default appProperties;
