import serverConfig from '@/server/config/server-config';
import axios, { AxiosError } from 'axios';
import { BackendError } from '@/server/lib/error';

declare module 'axios' {
  export interface AxiosRequestConfig {
    raw?: boolean; // whether process response automatically
  }
}

axios.defaults.timeout = 60000 * 10;
axios.interceptors.request.use((config) => {
  if (!serverConfig.isServerProd) {
    console.info(
      `\n\x1b[38;2;0;204;204maxios: \x1b[0m\x1b[38;2;0;0;238m${config.method} ${config.url}\x1b[0m`,
    );
    console.info(`\x1b[38;2;0;204;204mparams: \x1b[0m`);
    console.info(
      `\x1b[38;2;0;0;238m${config.params ? JSON.stringify(config.params, null, 2) : 'No params'}\x1b[0m`,
    );
    console.info(`\x1b[38;2;0;204;204mdata: \x1b[0m`);
    console.info(
      `\x1b[38;2;0;0;238m${config.data ? JSON.stringify(config.data, null, 2) : 'No data'}\x1b[0m\n`,
    );
  }
  return config;
});
axios.interceptors.response.use(
  (response) => {
    const config = response.config;
    // custom config field to return response object.
    if (config.raw) {
      return response;
    }
    if (response.data?.meta?.code) {
      if (response.data.meta.code === 'OK') {
        return response.data.data;
      }
      return Promise.reject(
        new BackendError({
          request: response.request,
          response,
          config: response.config,
        } as AxiosError),
      );
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(new BackendError(error));
  },
);
