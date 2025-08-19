import { redirect } from 'next/navigation';
import { getRouteInfo } from '@/config/client-routes';

const billingCenterRoute = getRouteInfo('billingCenter');
export default function Home() {
  return redirect(billingCenterRoute!.pathname);
}
