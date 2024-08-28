import { router } from '../../trpc-utils';
import { emailTemplateList } from './procedure';

const emailBuilder = router({
  emailTemplateList,
});

export default emailBuilder;
