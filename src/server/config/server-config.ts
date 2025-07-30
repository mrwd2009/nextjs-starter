const serverConfig = {
  isServerProd: process.env.NODE_ENV === 'production',
  trpc: {
    basePath: '/api/trpc',
  },
};

export default serverConfig;
