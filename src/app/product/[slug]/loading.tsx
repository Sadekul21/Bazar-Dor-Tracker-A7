
export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f3f7f3]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">

        {/* Breadcrumb */}
        <div className="skeleton mb-6 h-4 w-52" />

        {/* Product Summary */}
        <div className="rounded-2xl border border-[#e3ebe5] bg-white p-6">
          <div className="flex flex-col justify-between gap-6 sm:flex-row">
            <div className="flex items-start gap-4">
              <div className="skeleton h-16 w-16 rounded-xl" />

              <div className="space-y-3">
                <div className="skeleton h-8 w-48 max-w-full" />
                <div className="skeleton h-5 w-24 rounded-full" />
                <div className="skeleton h-4 w-56 max-w-full" />
              </div>
            </div>

            <div className="skeleton h-32 w-full rounded-xl sm:w-48" />
          </div>
        </div>

        {/* Price Summary */}
        <div className="mt-6 rounded-2xl border border-[#e3ebe5] bg-white p-6">
          <div className="skeleton mb-6 h-7 w-44" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-100 p-5"
              >
                <div className="skeleton h-4 w-24" />
                <div className="skeleton mt-4 h-7 w-32" />
              </div>
            ))}
          </div>

          {/* Market Table Skeleton */}
          <div className="skeleton mt-10 h-7 w-52" />

          <div className="mt-5 space-y-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="skeleton h-12 w-full rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
