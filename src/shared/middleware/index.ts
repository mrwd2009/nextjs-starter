import cors from './cors';
import helmet from './helmet';
import { compose } from './middleware-utils';

const middlewareRouter = compose([cors, helmet]);

export default middlewareRouter;
