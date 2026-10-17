
import type { Product } from "@/types/product";

const MarketPrices = ({ product }: { product: Product }) => {
  const markets = product.markets ?? [];

  const bn = (value: number) =>
    value.toLocaleString("bn-BD", {
      maximumFractionDigits: 2,
    });

  // Calculate market price summary
  const minimum = markets.length
    ? Math.min(...markets.map((item) => item.min))
    : null;

  const maximum = markets.length
    ? Math.max(...markets.map((item) => item.max))
    : null;

  const average = markets.length
    ? markets.reduce(
        (total, item) => total + (item.min + item.max) / 2,
        0
      ) / markets.length
    : null;

  const summary = [
    {
      title: "সর্বনিম্ন দাম",
      value: minimum,
      color: "text-green-700",
      bg: "bg-green-50",
    },
    {
      title: "সর্বোচ্চ দাম",
      value: maximum,
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      title: "গড় দাম",
      value: average,
      color: "text-slate-700",
      bg: "bg-slate-50",
    },
  ];

  return (
    <section className="mt-6 rounded-2xl border border-[#e3ebe5] bg-white p-5 shadow-sm sm:p-7">

      <h2 className="text-xl font-bold text-[#202b23]">
        দামের সারসংক্ষেপ
      </h2>

      {/* Price Summary Cards */}
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {summary.map((item) => (
          <div
            key={item.title}
            className={`rounded-xl border border-gray-100 p-5 ${item.bg}`}
          >
            <p className="text-sm text-gray-600">
              {item.title}
            </p>

            <p className={`mt-3 text-2xl font-bold ${item.color}`}>
              {item.value === null
                ? "তথ্য নেই"
                : `${bn(item.value)} টাকা`}
            </p>
          </div>
        ))}
      </div>

      {/* Market Price Table */}
      <div className="mt-9">
        <h2 className="text-xl font-bold text-[#202b23]">
          বাজারভিত্তিক আজকের দাম
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          বিভিন্ন বাজারের সর্বনিম্ন, সর্বোচ্চ ও গড় দাম
        </p>

        <div className="mt-5 overflow-x-auto rounded-xl border border-[#e3ebe5]">
          <table className="w-full min-w-[650px] text-left text-sm">

            <thead className="bg-[#edf5ef] text-[#35483b]">
              <tr>
                <th className="px-4 py-4">বাজার</th>
                <th className="px-4 py-4">বিভাগ</th>
                <th className="px-4 py-4">সর্বনিম্ন</th>
                <th className="px-4 py-4">সর্বোচ্চ</th>
                <th className="px-4 py-4">গড়</th>
              </tr>
            </thead>

            <tbody>
              {markets.map((item, index) => {
                const marketAverage =
                  (item.min + item.max) / 2;

                return (
                  <tr
                    key={`${item.market}-${index}`}
                    className="border-t border-gray-100 hover:bg-[#f7faf8]"
                  >
                    <td className="px-4 py-4 font-medium text-[#202b23]">
                      {item.market}
                    </td>

                    <td className="px-4 py-4 text-gray-600">
                      {item.division}
                    </td>

                    <td className="px-4 py-4 text-green-700">
                      {bn(item.min)} টাকা
                    </td>

                    <td className="px-4 py-4 text-red-600">
                      {bn(item.max)} টাকা
                    </td>

                    <td className="px-4 py-4 font-semibold text-[#202b23]">
                      {bn(marketAverage)} টাকা
                    </td>
                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>

        {markets.length === 0 && (
          <p className="mt-4 text-center text-sm text-gray-500">
            বাজারভিত্তিক দামের তথ্য পাওয়া যায়নি।
          </p>
        )}

        {markets.length > 0 && (
          <p className="mt-3 text-xs text-gray-500">
             
          </p>
        )}
      </div>
    </section>
  );
};

export default MarketPrices;
