"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between gap-10 border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <Image src={"/logo.svg"} width={173} height={39} alt="Finance AI" />
        <Link
          href={"/"}
          className={
            pathname === "/"
              ? "font-extrabold text-primary"
              : "text-muted-foreground hover:text-zinc-300"
          }
        >
          Dashboard
        </Link>
        <Link
          href={"/transactions"}
          className={
            pathname === "/transactions"
              ? "font-extrabold text-primary"
              : "text-muted-foreground hover:text-zinc-300"
          }
        >
          Transações
        </Link>
        <Link
          href={"/subscription"}
          className={
            pathname === "/subscription"
              ? "font-extrabold text-primary"
              : "text-muted-foreground hover:text-zinc-300"
          }
        >
          Assinatura
        </Link>
      </div>
      <UserButton showName />
    </nav>
  );
}
