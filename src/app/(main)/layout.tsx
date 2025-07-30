import MainLayout from '@/layouts/MainLayout';
import { RouteGuarder } from '@/permission';

export default function MainContainerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RouteGuarder>
      <MainLayout>{children}</MainLayout>
    </RouteGuarder>
  );
}
