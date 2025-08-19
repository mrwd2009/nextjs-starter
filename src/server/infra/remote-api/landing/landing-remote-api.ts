import {
  LoginSsoAccountUsingTokenParams,
  LoginSsoAccountUsingTokenResponse,
  LandingRemoteApiInterface,
} from '@/server/core/remote-api-interface/landing/landing-remote-api-interface';
import type { ApiEndpointsInterface } from '@/server/core/system-config-interface';
import { IOC_ID_STORE, Qualifier } from '@/server/lib/ioc';
import axios from 'axios';

class LandingRemoteApi implements LandingRemoteApiInterface {
  constructor(
    @Qualifier(IOC_ID_STORE.ApiEndpoints)
    private readonly apiEndpoints: ApiEndpointsInterface,
  ) {}

  async loginSsoAccountUsingToken(
    params: LoginSsoAccountUsingTokenParams,
  ): Promise<LoginSsoAccountUsingTokenResponse> {
    const { requestId, token } = params;
    const url = `${this.apiEndpoints.landingApi.host}${this.apiEndpoints.landingApi.endpoints.loginSsoAccount}`;
    return await axios.post(url, {
      requestId,
      token,
    });
  }
}

export default LandingRemoteApi;
