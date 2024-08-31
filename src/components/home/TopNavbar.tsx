import Link from "next/link";

export const TopNavbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold ">
      <Link href="/">Summarise</Link>
    </nav>
  );
};
