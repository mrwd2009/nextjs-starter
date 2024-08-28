import GatewayError from './gateway-error';

class ExpiredTokenError extends GatewayError {
  constructor(
    msg: string,
    public internalMessage: string = '',
  ) {
    super(msg);
    this.code = 'ExpiredTokenError';
  }
}

export default ExpiredTokenError;
