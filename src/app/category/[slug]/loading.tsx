
import ProductSkeleton from "@/components/products/ProductSkeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f1f6f2]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">

        {/* Category Header Skeleton */}
        <div className="flex items-center gap-4 rounded-2xl border border-[#e3ebe5] bg-white p-6">
          <div className="skeleton h-14 w-14 rounded-xl" />

          <div className="space-y-3">
            <div className="skeleton h-6 w-32" />
            <div className="skeleton h-4 w-52 max-w-full" />
          </div>
        </div>

        {/* Sort Skeleton */}
        <div className="mt-6 flex justify-end rounded-xl border border-[#e3ebe5] bg-white p-4">
          <div className="skeleton h-9 w-48 rounded-lg" />
        </div>

        {/* Product Count */}
        <div className="skeleton my-6 h-4 w-44" />

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
