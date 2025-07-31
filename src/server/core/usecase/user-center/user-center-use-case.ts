import { Component, IOC_ID_STORE, Qualifier } from '@/server/lib/ioc';
import type { ServerConfigInterface } from '../../system-config-interface';
import { createToken } from '@/server/lib/jwt-utils';

@Component()
export class UserCenterUseCase {
  constructor(
    @Qualifier(IOC_ID_STORE.ServerConfig)
    private readonly serverConfig: ServerConfigInterface,
  ) {}

  async createSessionTokenInDev(params: {
    userEmail: string;
    userName: string;
    userRoles: string[];
    userPicture?: string;
  }) {
    const { jwt } = this.serverConfig;
    const token = await createToken({
      payload: params,
      expireHour: jwt.expireHour,
      secret: jwt.asymmetricSecret.private,
      issuer: jwt.issuer,
      audience: jwt.audience,
    });
    return token;
  }
}
