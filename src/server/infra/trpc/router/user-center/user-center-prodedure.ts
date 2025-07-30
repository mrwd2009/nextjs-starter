import { trpcProcedure } from '../../trpc-utils';

export const getUserInfo = trpcProcedure.query(async () => {
  return {
    userEmail: 'test@test.com',
    userName: 'Test User',
    userRoles: ['Admin'],
  };
});
