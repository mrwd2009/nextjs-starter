import { NextRequest, NextResponse } from 'next/server';

export type NextHandler = (request: NextRequest) => Promise<NextResponse>;
export type NextMiddleware = (
  request: NextRequest,
  next: NextHandler,
) => Promise<NextResponse>;

export function compose(middlewares: NextMiddleware[]) {
  return async function (request: NextRequest) {
    let index = -1;
    async function dispatch(i: number): Promise<NextResponse> {
      if (i <= index) {
        throw new Error('next() called multiple times');
      }
      index = i;
      let fn = middlewares[i];
      if (i === middlewares.length) {
        fn = async () => NextResponse.next();
      }
      return await fn(request, dispatch.bind(null, i + 1));
    }
    return await dispatch(0);
  };
}
