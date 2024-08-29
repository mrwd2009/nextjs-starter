import errorHandler from './error-handler';
import { Router } from '../nextjs-utils';

const applyMiddlewares = (router: Router) => {
  errorHandler(router);
  return router;
};

export default applyMiddlewares;
