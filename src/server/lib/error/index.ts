import AuthError from './auth-error';
import GatewayError from './gateway-error';
import DataError from './data-error';
import LogicError from './logic-error';
import ParamError from './param-error';
import ForbiddenError from './forbidden-error';
import LockError from './lock-error';
import ExpiredTokenError from './expired-token-error';

export {
  AuthError,
  GatewayError,
  DataError,
  LogicError,
  ParamError,
  ForbiddenError,
  LockError,
  ExpiredTokenError,
};

export default GatewayError;
