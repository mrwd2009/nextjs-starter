import GatewayError from './gateway-error';

class RateLimitError extends GatewayError {
  constructor(msg: string) {
    super(msg);
    this.code = 'RateLimitError';
  }
}

export default RateLimitError;
