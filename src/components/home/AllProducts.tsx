
import ProductCard, {
  type Product,
} from "@/components/products/ProductCard";

const AllProducts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: Product[] = await res.json();

  return (
    <section
      id="সব-পণ্য"
      className="mx-auto max-w-6xl scroll-mt-6 px-4 py-10 sm:px-6"
    >
      {/* Section Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#202b23]">
          সব পণ্য
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          মোট {products.length.toLocaleString("bn-BD")}টি পণ্য
          দেখানো হচ্ছে
        </p>
      </div>

      {/* All Product Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
