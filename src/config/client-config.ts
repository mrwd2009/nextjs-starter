const clientConfig = {
  isClientProd: process.env.NODE_ENV === 'production',
  trpc: {
    basePath: '/apps/partner-portal/api/trpc',
  },
};

export default clientConfig;
