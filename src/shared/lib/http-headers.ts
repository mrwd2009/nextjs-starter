import dayjs from './dayjs';

export const getNoCacheHeaders = () => {
  return new Headers([
    [
      'cache-control',
      'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
    ],
    ['last-modified', dayjs.utc().format('ddd, DD MMM YYYY HH:mm:ss G[M]T')],
  ]);
};
