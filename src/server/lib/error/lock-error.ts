import GatewayError from './gateway-error';

class LockError extends GatewayError {
  constructor(
    msg: string,
    public internalMessage: string = '',
  ) {
    super(msg);
    this.code = 'LockError';
  }
}

export default LockError;
