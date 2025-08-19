export interface LoginSsoAccountUsingTokenParams {
  requestId: string;
  token: string;
}

export interface LoginSsoAccountUsingTokenResponse {
  id: number;
  sub: string;
  email: string;
  name: string;
  picture: string;
}
export interface LandingRemoteApiInterface {
  loginSsoAccountUsingToken: (
    params: LoginSsoAccountUsingTokenParams,
  ) => Promise<LoginSsoAccountUsingTokenResponse>;
}
