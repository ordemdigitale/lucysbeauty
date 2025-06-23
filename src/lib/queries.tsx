import { categories, Category, Product } from "./data2";

// Type guard — ensures TypeScript knows this is a valid Category
export function isCategory(slug: string): slug is Category {
  return categories.some(c => c.slug === slug);
}

// Return all products in a specific category (by slug)
export function getProductsByCategory(
  slug: Category,
  items: Product[]
): Product[] {
  return items.filter(p => p.category === slug);
}

// Return all products in any of the given categories
export function getProductsByCategories(
  slugs: Category[],
  items: Product[]
): Product[] {
  return items.filter(p => slugs.includes(p.category));
}

// Return all products except those matching the category
export function getProductsExcludingCategory(
  slug: Category,
  items: Product[]
): Product[] {
  return items.filter(p => p.category !== slug);
}
