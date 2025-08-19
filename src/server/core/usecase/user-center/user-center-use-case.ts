import { Component, IOC_ID_STORE, Qualifier } from '@/server/lib/ioc';
import type { ServerConfigInterface } from '../../system-config-interface';
import { createToken, encryptJweMsg } from '@/server/lib/jwt-utils';
import type { UserRepositoryProviderInterface } from '../../repository-interface/main/user-repository-provider-interface';
import type { MainEntityManagerProviderInterface } from '../../repository-interface/main/main-datasource-provider-interface';
import type { LoggerInterface } from '../../logger-interface/logger-interface';

@Component()
export class UserCenterUseCase {
  constructor(
    @Qualifier(IOC_ID_STORE.ServerConfig)
    private readonly serverConfig: ServerConfigInterface,
    @Qualifier(IOC_ID_STORE.MainEntityManagerProvider)
    private readonly mainEntityManagerProvider: MainEntityManagerProviderInterface,
    @Qualifier(IOC_ID_STORE.UserRepositoryProvider)
    private readonly userRepositoryProvider: UserRepositoryProviderInterface,
    @Qualifier(IOC_ID_STORE.Logger)
    private readonly logger: LoggerInterface,
  ) {}

  async createSessionTokenInDev(params: {
    userEmail: string;
    userName: string;
    userRoles: string[];
    userPicture?: string;
  }) {
    const { jwt, jwe } = this.serverConfig;
    const encryptedEmail = await encryptJweMsg({
      secret: jwe.secret,
      msg: params.userEmail,
    });
    const token = await createToken({
      payload: {
        ...params,
        userEmail: encryptedEmail,
      },
      expireHour: jwt.expireHour,
      secret: jwt.asymmetricSecret.private,
      issuer: jwt.issuer,
      audience: jwt.audience,
    });
    return token;
  }
}
