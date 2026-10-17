
"use client";

import MarqueeText from "react-marquee-text";


interface Product {
  id: number;
  nameBn: string;
  image: string;
  today: number;
  unit: string;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

const MarqueeContent = ({ products }: { products: Product[] }) => {
  return (
    <MarqueeText
  direction="right"
  duration={10}
  pauseOnHover={true}
>
      {products.map((product) => (
        <span
          key={product.id}
           className="mx-5 inline-flex items-center gap-2 whitespace-nowrap text-sm"
        >
          <span>{product.image}</span>

          <span className="font-medium text-gray-800">
            {product.nameBn}
          </span>

          <span className="font-semibold text-gray-900">
            {product.today.toLocaleString("bn-BD")} টাকা/{product.unit}
          </span>

          <span
            className={
              product.change.dir === "up"
                ? "font-semibold text-red-600"
                : product.change.dir === "down"
                  ? "font-semibold text-green-700"
                  : "text-gray-500"
            }
          >
            {product.change.dir === "up"
              ? "▲"
              : product.change.dir === "down"
                ? "▼"
                : "—"}{" "}
            {product.change.pct.toLocaleString("bn-BD")}%
          </span>
        </span>
      ))}
    </MarqueeText>
  );
};

export default MarqueeContent;
