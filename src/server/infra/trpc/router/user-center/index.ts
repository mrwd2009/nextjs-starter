import { createTrpcRouter } from '../../trpc';
import * as userCenterProcedure from './user-center-prodedure';

const userCenter = createTrpcRouter({
  ...userCenterProcedure,
});

export default userCenter;
