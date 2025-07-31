/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';
import pick from 'lodash/pick';
import GatewayError from './gateway-error';

class BackendError extends GatewayError {
  public publicMessage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public httpConfig: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public httpResponse: any;

  constructor(error: AxiosError) {
    super(error.message);
    if (error.config) {
      this.httpConfig = pick(error.config, [
        'url',
        'method',
        'headers',
        'params',
        'data',
        'timeout',
      ]);
    }
    if (error.response) {
      this.httpResponse = pick(error.response, ['data', 'status', 'statusText', 'headers']);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((error.response?.data as any)?.meta) {
      const {
        data: {
          meta: { privateMessage, publicMessage },
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } = error.response as any;
      // message field maybe empty
      this.message = privateMessage;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((error.response as any).status === 429) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.publicMessage = `System busy, please retry later!\n If this keeps happening, please contact CFEX for support.\n Code: ${(error.response as any).data.meta.code}`;
      } else {
        this.publicMessage = publicMessage;
      }
    } else {
      this.publicMessage = error.message;
    }
    this.code = 'BackendError';
  }
}

export default BackendError;
