
"use client";

import { useState } from "react";
import ProductCard, {
  type Product,
} from "@/components/products/ProductCard";
import Link from "next/link";

interface ProductSortProps {
  products: Product[];
}

const ProductSort = ({ products }: ProductSortProps) => {
  const [sort, setSort] = useState("default");

  // Sort products based on selection
  const sortedProducts = [...products];

  if (sort === "low") {
    sortedProducts.sort((a, b) => a.today - b.today);
  }

  if (sort === "high") {
    sortedProducts.sort((a, b) => b.today - a.today);
  }

  return (
    <section className="mt-6">
      {/* Sort Control */}
      <div className="flex items-center justify-end gap-3 rounded-xl border border-[#e3ebe5] bg-white px-4 py-4">
        <label
          htmlFor="product-sort"
          className="text-sm font-medium text-gray-600"
        >
          সাজান
        </label>

        <select
          id="product-sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="select select-bordered select-sm w-full max-w-52 bg-white text-gray-700 focus:outline-[#078747]"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low">দাম: কম থেকে বেশি</option>
          <option value="high">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      {/* Product Count */}
      <p className="my-5 text-sm text-gray-500">
        মোট {products.length.toLocaleString("bn-BD")}টি
        পণ্য দেখানো হচ্ছে
      </p>

      {/* Product Cards */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-[#e3ebe5] bg-white px-4 py-16 text-center">
          <h2 className="text-xl font-bold text-[#202b23]">
            কোনো পণ্য পাওয়া যায়নি
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            এই ক্যাটাগরিতে এখন কোনো পণ্য নেই।
          </p>

         <Link
  href="/"
  className="mt-5 inline-block rounded-lg bg-[#078747] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#066b39]"
>
  হোম পেজে ফিরে যান
</Link>
        </div>
      )}
    </section>
  );
};

export default ProductSort;
