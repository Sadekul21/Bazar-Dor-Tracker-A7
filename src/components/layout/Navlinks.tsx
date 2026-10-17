
import Link from "next/link";
import { getCategories } from "@/lib/api";

const Navlinks = async () => {
  const categories = await getCategories();

  return (
    <nav className="border-t border-gray-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-5 overflow-x-auto px-4 py-3 whitespace-nowrap sm:px-6 md:justify-center">


        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="flex shrink-0 items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-green-50 hover:text-[#078747]"
          >
            <span>{category.icon}</span>
            <span>{category.nameBn}</span>
          </Link>
        ))}

      </div>
    </nav>
  );
};

export default Navlinks;
