
import MarqueeContent from "./MarqueeContent";

const MarqueeSection = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await res.json();

  return (
    <section className="border-y border-green-100 bg-green-50 py-3">
      <MarqueeContent products={products} />
    </section>
  );
};

export default MarqueeSection;
