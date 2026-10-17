
import Link from "next/link";

export interface Product {
  id: number;
  nameBn: string;
  image: string;
  unit: string;
  today: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

const ProductCard = ({ product }: { product: Product }) => {
  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

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

  const arrow = isUp ? "▲" : isDown ? "▼" : "—";

  const badgeColor = isUp
    ? "bg-red-50 text-red-600"
    : isDown
      ? "bg-green-50 text-green-700"
      : "bg-gray-100 text-gray-500";

  return (
    <Link
      href={`/product/${product.id}`}
      className="group block rounded-xl border border-[#e3ebe5] bg-white p-4 transition-all duration-200 hover:border-green-200 hover:shadow-md"
    >
      {/* Product name and image */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f1f7f2] text-2xl">
          {product.image}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[#202b23] group-hover:text-[#078747]">
            {product.nameBn}
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            প্রতি {unit}
          </p>
        </div>
      </div>

      {/* Today's price */}
      <div className="mt-5">
        <p className="text-xs text-gray-500">
          আজকের দাম
        </p>

        <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
          <p className="font-bold text-[#202b23]">
            {product.today.toLocaleString("bn-BD")} টাকা
          </p>

          <span
            className={`rounded-full px-2 py-1 text-xs font-semibold ${badgeColor}`}
          >
            {arrow}{" "}
            {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
