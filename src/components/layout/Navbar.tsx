
import Image from "next/image";
import Link from "next/link";
import Navlinks from "./Navlinks";
import NavbarAuth from "./NavbarAuth";

export default function Navbar() {
  const today = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

  return (
    <header className="border-b border-[#e7eee9] bg-white">
      <div className="mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">

        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#078747] p-2 shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/logo-icon.png"
              alt="বাজার দর লোগো"
              width={38}
              height={38}
              priority
              className="h-full w-full object-contain"
            />
          </div>

          <div className="min-w-0">
            <p className="text-lg leading-tight font-bold tracking-tight text-[#1e3025] sm:text-xl">
              বাজার দর
            </p>

            <p className="mt-1 text-[10px] leading-relaxed text-[#7c8a80] sm:text-xs">
              {today}
            </p>
          </div>
        </Link>

        <NavbarAuth />

      </div>

      <Navlinks />
    </header>
  );
}
