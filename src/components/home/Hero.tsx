
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const today = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

  return (
    <section className="mx-auto max-w-6xl px-4 py-7 sm:px-6">
      <div className="grid grid-cols-1 items-start gap-6 overflow-hidden rounded-2xl border border-[#e3ebe5] bg-white p-6 sm:p-8 md:grid-cols-[1.5fr_1fr]">

        
        <div className="flex flex-col items-start">

          <span className="inline-block rounded-full bg-[#e8f6ed] px-3 py-1 text-xs font-semibold text-[#078747]">
            {today}
          </span>

         
          <h1 className="mt-3 text-2xl font-bold leading-snug text-[#202b23] sm:text-3xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#526257]">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
            বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং
            দামের পরিবর্তন এক জায়গায়।
          </p>

         
          <Link
            href="#সব-পণ্য"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#078747] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#066b39]"
          >
            সব পণ্য দেখুন
            <span aria-hidden="true">↓</span>
          </Link>

        </div>

        
        <div className="flex items-center justify-center md:justify-end">
          <Image
            src="/bazar-hero.png"
            alt="বাজারের নিত্যপ্রয়োজনীয় পণ্যের ঝুড়ি"
            width={300}
            height={260}
            priority
            className="h-auto w-full max-w-[220px] object-contain sm:max-w-[260px] md:max-w-[290px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
