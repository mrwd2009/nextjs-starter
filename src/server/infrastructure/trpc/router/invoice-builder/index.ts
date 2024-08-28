import { router } from '../../trpc-utils';
import { invoiceTemplateList } from './procedure';

const invoiceBuilder = router({
  invoiceTemplateList,
});

export default invoiceBuilder;
