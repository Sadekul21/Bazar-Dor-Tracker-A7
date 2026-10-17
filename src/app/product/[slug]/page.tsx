
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductSummary from "@/components/products/ProductSummary";
import MarketPrices from "@/components/products/MarketPrices";
import type { Product } from "@/types/product";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

const ProductDetails = async ({ params }: ProductPageProps) => {
  const { slug } = await params;

 
  const productId = Number(slug);

  if (!Number.isInteger(productId) || productId <= 0) {
    notFound();
  }

  
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${productId}`
  );

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const product: Product | null = await res.json();

  if (!product || !product.id) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f3f7f3]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-2 text-sm"
        >
          <Link href="/" className="text-[#078747] hover:underline">
            হোম
          </Link>

          <span className="text-gray-400">›</span>

          <Link
            href={`/category/${product.category}`}
            className="text-[#078747] hover:underline"
          >
            {product.categoryNameBn}
          </Link>

          <span className="text-gray-400">›</span>

          <span className="text-gray-700">
            {product.nameBn}
          </span>
        </nav>

        {/* Product Information */}
        <ProductSummary product={product} />

        {/* Market Price Information */}
        <MarketPrices product={product} />

      </div>
    </main>
  );
};

export default ProductDetails;
