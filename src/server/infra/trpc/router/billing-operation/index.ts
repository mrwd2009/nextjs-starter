import { createTrpcRouter } from '../../trpc';
import * as billingOperationProcedure from './billing-operation-procedure';

const billingOperation = createTrpcRouter({
  ...billingOperationProcedure,
});

export default billingOperation;
