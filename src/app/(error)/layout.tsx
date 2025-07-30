import ErrorLayout from '@/layouts/ErrorLayout';

export default function ErrorContainerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ErrorLayout>{children}</ErrorLayout>;
}
