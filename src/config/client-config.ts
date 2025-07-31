const clientConfig = {
  isClientProd: process.env.NODE_ENV === 'production',
  basePath: '/apps/partner-portal',
  trpc: {
    basePath: '/apps/partner-portal/api/trpc',
  },
};

export default clientConfig;
