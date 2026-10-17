
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ShoppingBasket } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[85vh] items-center justify-center bg-[#f7f8f5] px-4 py-12">
      <div className="w-full max-w-xl rounded-3xl border border-[#e9ede8] bg-white px-6 py-8 sm:px-12 sm:py-10">

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f4eb]">
            <ShoppingBasket className="h-5 w-5 text-[#087d49]" />
          </div>
          <span className="text-lg font-bold text-[#1e3330]">
            বাজার দর
          </span>
        </div>

        <div className="relative mx-auto mt-12 flex h-48 w-64 items-center justify-center">
          <div className="absolute h-36 w-52 rounded-3xl bg-[#edf5ee]" />
          <div className="absolute right-4 top-0 h-12 w-12 rounded-full bg-[#ffead6]" />
          <div className="absolute bottom-1 left-3 h-9 w-9 rounded-full bg-[#d7ebdf]" />

          <span className="relative text-[92px] font-extrabold tracking-[-8px] text-[#163a30]">
            404
          </span>
        </div>

        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#c17b42]">
            PAGE NOT FOUND
          </p>

          <h1 className="mt-4 text-2xl font-bold text-[#19362f] sm:text-3xl">
            এই পেজটি খুঁজে পাওয়া যায়নি
          </h1>

          <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#6d7b75]">
            লিংকটি হয়তো পরিবর্তন হয়েছে,
            অথবা পেজটি আর এখানে নেই।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#087d49] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#066539]"
          >
            <ArrowLeft className="h-4 w-4" />
            হোম পেজে ফিরুন
          </Link>
        </div>

        <div className="mt-10 border-t border-[#edf0ec] pt-6 text-center">
          <span className="text-sm text-[#84928a]">
            বাজারের সর্বশেষ দাম জানতে{" "}
          </span>

          <Link
            href="/#সব-পণ্য"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#087d49] hover:underline"
          >
            সব পণ্য দেখুন
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </main>
  );
}
