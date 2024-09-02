import errorHandler from './error-handler';
import measureHandler from './measure-handler';
import { Router } from '../nextjs-utils';

const applyMiddlewares = (router: Router) => {
  errorHandler(router);
  measureHandler(router);
  return router;
};

export default applyMiddlewares;
