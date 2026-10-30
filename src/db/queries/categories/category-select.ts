/* Category select queries */
import { categories, type TCategory } from "@/lib/data2";

export function getCategoryList(): TCategory[] {
  return [...categories];
}