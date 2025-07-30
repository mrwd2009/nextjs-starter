import helmet from './helmet';
import { compose } from './middleware-utils';

const nextMiddleware = compose([helmet]);

export default nextMiddleware;
