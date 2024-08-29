import { createEdgeRouter } from 'next-connect';
import applyMiddlewares from '../middleware';
import { getNextJsRoutes } from '../nextjs-utils';
import './contract-builder';

const getRouter = () => {
  const router = createEdgeRouter();
  applyMiddlewares(router);
  getNextJsRoutes().forEach((register) => register(router));
  router.all(async () => {
    return Response.json(
      {
        message: 'Not found',
      },
      {
        status: 404,
      },
    );
  });
  return router;
};

export default getRouter;
