import { Container } from 'inversify';
import { initIocContainer } from '../../lib/ioc';

const iocContainer = new Container({
  defaultScope: 'Singleton',
});

initIocContainer(iocContainer);
