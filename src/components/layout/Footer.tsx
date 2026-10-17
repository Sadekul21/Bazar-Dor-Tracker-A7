
import Link from "next/link";
import { ShoppingBasket, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const year = new Date()
    .getFullYear()
    .toString()
    .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);

  return (
    <footer className="bg-[#123b2e] text-white">
      <div className="mx-auto flex min-h-16 max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:gap-4 sm:px-6">

        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <ShoppingBasket size={21} className="text-[#b7e6c9]" />
          <span className="text-lg font-bold">বাজার দর</span>
        </Link>

        <p className="text-center text-xs text-[#cee1d5]">
          © {year} বাজার দর। সর্বস্বত্ব সংরক্ষিত।
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-[#b7e6c9] transition-colors hover:text-white"
        >
          হোম
          <ArrowUpRight size={15} />
        </Link>

      </div>
    </footer>
  );
};

export default Footer;
