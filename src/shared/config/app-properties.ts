const basePath = '/';
const appProperties = {
  isProd: process.env.NODE_ENV === 'production',
  basePath: {
    root: basePath,
    trpc: `${basePath}api/trpc`,
  },
  allowedDomains: (process.env.APP_ALLOWED_DOMAINS || '')
    .split(',')
    .map((domain) => domain.trim())
    .filter((domain) => !!domain),
};

export default appProperties;
