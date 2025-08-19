import z from 'zod';
import { publicTrpcProcedure, protectedTrpcProcedure } from '../../trpc-utils';
import { getIocComponent } from '@/server/lib/ioc';
import { UserCenterUseCase } from '@/server/core/usecase/user-center/user-center-use-case';
import serverConfig from '@/server/config/server-config';
import { setCookieValue } from '@/server/lib/cookie-utils';

const userCenterUseCase = getIocComponent<UserCenterUseCase>('UserCenterUseCase');

export const getUserInfo = protectedTrpcProcedure.query(async ({ ctx }) => {
  return {
    userEmail: ctx.user?.email,
    userName: ctx.user?.name,
    userRoles: ctx.user?.roles,
  };
});

export const loginInDev = publicTrpcProcedure
  .input(
    z.object({
      email: z.email().max(250).optional(),
      password: z.string().max(32).optional(),
    }),
  )
  .mutation(async ({ input, ctx }) => {
    const { email = 'ui-local-test@cfexcloud.com' } = input;
    const token = await userCenterUseCase.createSessionTokenInDev({
      userEmail: email,
      userName: 'UI Local Tester',
      userRoles: ['Admin'],
    });
    setCookieValue({
      headers: ctx.resHeaders,
      cookieKey: serverConfig.jwt.cookieKey,
      value: token,
      secure: serverConfig.isServerProd,
      maxAge: serverConfig.jwt.expireHour * 3600,
      path: serverConfig.client.basePath,
    });
    return true;
  });

export const logoutUser = protectedTrpcProcedure.mutation(async ({ ctx }) => {
  setCookieValue({
    headers: ctx.resHeaders,
    cookieKey: serverConfig.jwt.cookieKey,
    value: '',
    secure: serverConfig.isServerProd,
    maxAge: 0,
    path: serverConfig.client.basePath,
  });
  return true;
});
