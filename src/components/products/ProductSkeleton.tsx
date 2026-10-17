
const ProductSkeleton = () => {
  return (
    <div className="rounded-xl border border-[#e3ebe5] bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="skeleton h-12 w-12 rounded-xl" />

        <div className="flex-1 space-y-2">
          <div className="skeleton h-4 w-32 max-w-full" />
          <div className="skeleton h-3 w-20" />
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <div className="skeleton h-3 w-20" />

        <div className="flex items-center justify-between gap-3">
          <div className="skeleton h-5 w-24" />
          <div className="skeleton h-5 w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
