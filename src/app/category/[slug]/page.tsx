
import Link from "next/link";
import ProductSort from "@/components/category/ProductSort";
import type { Product } from "@/components/products/ProductCard";

interface Category {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;

  // Fetch all categories
  const categoryRes = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories"
  );

  if (!categoryRes.ok) {
    throw new Error("Failed to fetch categories");
  }

  const categories: Category[] = await categoryRes.json();

  // Find the selected category
  const category = categories.find(
    (item) => item.slug === slug
  );

  // Invalid category
  if (!category) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-[#202b23]">
          ক্যাটাগরি পাওয়া যায়নি
        </h1>

        <p className="mt-3 text-gray-600">
          আপনি যে ক্যাটাগরিটি খুঁজছেন সেটি নেই।
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-[#078747] px-5 py-3 text-sm font-semibold text-white"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  // Fetch products of this category
  const productRes = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${encodeURIComponent(slug)}`
  );

  if (!productRes.ok) {
    throw new Error("Failed to fetch category products");
  }

  const products: Product[] = await productRes.json();

  return (
    <main className="min-h-screen bg-[#f1f6f2]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">

        {/* Category Header */}
        <section className="flex items-center gap-4 rounded-2xl border border-[#e3ebe5] bg-white p-5 sm:p-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f1f7f2] text-3xl">
            {category.icon}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-[#202b23]">
              {category.nameBn}
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              {products.length.toLocaleString("bn-BD")}টি পণ্যের
              আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </section>

        {/* Sorting and Product Cards */}
        <ProductSort products={products} />

      </div>
    </main>
  );
};

export default CategoryPage;
