
import type { Category } from "@/types/category";


const BASE_URL =
  "https://openapi.programming-hero.com/api/bazardor";

// Fetch all categories
export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${BASE_URL}/categories`);

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const categories: Category[] = await res.json();
  return categories;
};
