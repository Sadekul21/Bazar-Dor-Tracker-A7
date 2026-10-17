
import Link from "next/link";
import type { Product } from "@/types/product";

const ProductSummary = ({ product }: { product: Product }) => {
  const units: Record<string, string> = {
    kg: "কেজি",
    liter: "লিটার",
    litre: "লিটার",
    l: "লিটার",
    piece: "পিস",
    pcs: "পিস",
    dozen: "ডজন",
    "100g": "১০০ গ্রাম",
  };

  const unit = units[product.unit.toLowerCase()] || product.unit;

  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  const arrow = isUp ? "▲" : isDown ? "▼" : "—";

  const changeText = isUp
    ? "দাম বেড়েছে"
    : isDown
      ? "দাম কমেছে"
      : "দাম অপরিবর্তিত রয়েছে";

  const badgeColor = isUp
    ? "bg-red-50 text-red-600"
    : isDown
      ? "bg-green-50 text-green-700"
      : "bg-gray-100 text-gray-600";

  const bn = (value: number) =>
    value.toLocaleString("bn-BD", {
      maximumFractionDigits: 2,
    });

  return (
    <section className="rounded-2xl border border-[#e3ebe5] bg-white p-5 shadow-sm sm:p-7">

      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

        {/* Product Information */}
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ef] text-3xl">
            {product.image}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-[#202b23] sm:text-3xl">
              {product.nameBn}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Link
                href={`/category/${product.category}`}
                className="rounded-full bg-[#eaf6ef] px-3 py-1 text-xs font-semibold text-[#078747]"
              >
                {product.categoryNameBn}
              </Link>

              <span className="text-sm text-gray-600">
                প্রতি {unit}
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              গতকালের তুলনায় আজ {changeText}।
            </p>
          </div>
        </div>

        {/* Today's Price */}
        <div className="rounded-xl border border-[#dceee2] bg-[#f0f7f2] p-5 md:min-w-48">
          <p className="text-sm text-gray-600">
            আজকের দাম
          </p>

          <p className="mt-1 text-3xl font-bold text-[#202b23]">
            {bn(product.today)} টাকা
          </p>

          <p className="mt-1 text-xs text-gray-500">
            প্রতি {unit}
          </p>

          <span
            className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeColor}`}
          >
            {arrow} {bn(Math.abs(product.change.pct))}%
          </span>
        </div>

      </div>
    </section>
  );
};

export default ProductSummary;
