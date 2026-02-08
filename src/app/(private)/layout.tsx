export default function PrivatePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <header>header</header>
    <main className="bg-red-400 max-w-7xl mx-auto px-10">{children}</main>
    </>
  );
}
