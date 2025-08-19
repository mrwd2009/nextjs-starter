const envObj = process.env;

const apiEndpoints = {
  landingApi: {
    host: envObj.APP_LANDING_REST_HOST!,
    endpoints: {
      loginSsoAccount: '/api/rest/user/login-with-one-time-code',
    },
  },
};

export type ApiEndpoints = typeof apiEndpoints;

export default apiEndpoints;
