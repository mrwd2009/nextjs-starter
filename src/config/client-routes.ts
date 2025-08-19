import { forEach, isArray } from 'lodash';

interface RouteInfo {
  title?: string;
  key: string;
  pathname: string;
  menu?: boolean;
  children?: RouteInfo[];
}

const clientRoutes: RouteInfo[] = [
  {
    title: 'Billing Center',
    key: 'billingCenter',
    pathname: '/billing-center',
    menu: true,
  },
  {
    key: 'login',
    pathname: '/login',
    menu: false,
  },
  {
    key: 'loginLanding',
    pathname: '/login/landing',
    menu: false,
  },
];

export const getRouteInfo = (keys: string | string[], routes = clientRoutes) => {
  let restKeys: string[] = [];
  let currentKey: string = '';
  if (isArray(keys)) {
    currentKey = keys[0];
    restKeys = keys.slice(1);
  } else {
    currentKey = keys;
  }

  let info: RouteInfo | undefined;
  forEach(routes, (routeInfo) => {
    if (routeInfo.key === currentKey) {
      if (restKeys.length) {
        if (routeInfo.children?.length) {
          info = getRouteInfo(restKeys, routeInfo.children);
        }
      } else {
        info = routeInfo;
      }
      return false;
    }
  });
  return info;
};

export const getRouteInfoByPathname = (pathname: string, routes = clientRoutes) => {
  let info: RouteInfo | undefined;

  forEach(routes, (routeInfo) => {
    if (routeInfo.pathname === pathname) {
      info = routeInfo;
      return false;
    }
    if (routeInfo.children?.length) {
      info = getRouteInfoByPathname(pathname, routeInfo.children);
      if (info) {
        return false;
      }
    }
  });

  return info;
};

export const getRoutesMenu = (
  context: { disabledPaths?: string[] } = {},
  routes = clientRoutes,
) => {
  const newRoutes: RouteInfo[] = [];
  forEach(routes, (routeInfo) => {
    const newRouteInfo: RouteInfo = {
      title: routeInfo.title!,
      key: routeInfo.key,
      pathname: routeInfo.pathname,
    };
    if (routeInfo.menu) {
      newRoutes.push(newRouteInfo);
    }
    if (routeInfo.children?.length) {
      const newChildren = getRoutesMenu(context, routeInfo.children);
      if (newChildren.length) {
        newRouteInfo.children = newChildren;
      }
    }
  });
  return newRoutes;
};

export const getRouteBC = (pathname: string, routes = clientRoutes) => {
  let bcList: RouteInfo[] = [];

  forEach(routes, (routeInfo) => {
    if (pathname.includes(routeInfo.pathname)) {
      if (
        pathname === routeInfo.pathname ||
        (!routeInfo.children?.length && pathname.includes(routeInfo.pathname))
      ) {
        bcList.push({
          title: routeInfo.title!,
          key: routeInfo.key,
          pathname: routeInfo.pathname,
        });
      } else if (routeInfo.children?.length) {
        const subBCList = getRouteBC(pathname, routeInfo.children);
        bcList = bcList.concat(
          {
            title: routeInfo.title!,
            key: routeInfo.key,
            pathname: routeInfo.pathname,
          },
          subBCList,
        );
      }
      return false;
    }
  });

  return bcList;
};
