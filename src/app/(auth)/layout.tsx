import AuthLayout from '@/layouts/AuthLayout';

export default function AuthContainerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthLayout>{children}</AuthLayout>;
}
