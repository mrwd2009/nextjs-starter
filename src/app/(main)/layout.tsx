export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      MainLayout
      {children}
    </div>
  );
}
