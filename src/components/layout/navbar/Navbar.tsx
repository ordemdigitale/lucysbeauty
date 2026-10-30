//import { getCategories } from "@/drizzle/queries";
import { getCategoryList } from "@/db/queries/categories/category-select";
import NavbarItems from "./NavItems";

export default function Navbar() {
  const categories = getCategoryList();

  return (
    <NavbarItems categories={categories} />
  );
}