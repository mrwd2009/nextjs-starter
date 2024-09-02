import appProperties from '@/shared/config/app-properties';
import { nanoid } from 'nanoid';
import { createEdgeRouter } from 'next-connect';

export type Router = ReturnType<typeof createEdgeRouter>;
export type RouteRegister = (router: Router) => void;
const routeRegisters: RouteRegister[] = [];

export type RouteContext = {
  requestId?: string;
};

export function registerNextJsRoute(register: RouteRegister) {
  routeRegisters.push(register);
}

export function getNextJsRoutes(): RouteRegister[] {
  return routeRegisters;
}

export function getFullPathname(pathname: string): string {
  return `${appProperties.basePath.root}api/rest${pathname}`;
}

export function createRouteContext(): RouteContext {
  return {
    requestId: nanoid(),
  };
}
