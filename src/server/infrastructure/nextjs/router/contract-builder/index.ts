import { getFullPathname, registerNextJsRoute } from '../../nextjs-utils';

registerNextJsRoute((router) => {
  router.get(getFullPathname('/contract-builder'), async (request, ...args) => {
    console.log(args, '------11-1', request);
    throw new Error('test');
    return Response.json({
      message: 'Hello, world!',
      url: request.url,
    });
  });
});
