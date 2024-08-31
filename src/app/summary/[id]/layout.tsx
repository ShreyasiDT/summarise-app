import { TopNavbar } from "~/components/home/TopNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-screen grid-rows-[auto,1fr] overflow-x-hidden">
      <TopNavbar />
      <main className="overflow-y-scroll">{children}</main>
    </div>
  );
}
