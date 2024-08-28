const appProperties = {
  isProd: process.env.NODE_ENV === 'production',
  basePath: {
    trpc: '/api/trpc',
  },
};

export default appProperties;
