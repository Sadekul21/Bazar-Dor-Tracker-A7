
import { Category } from "@/types/category";

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const categories: Category[] = await res.json();

  return categories;
};
