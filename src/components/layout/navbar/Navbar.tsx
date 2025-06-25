import { getCategories } from "@/drizzle/queries";
import NavbarItems from "./NavItems";

export default async function Navbar() {
  const categories = await getCategories();

  return (
    <NavbarItems categories={categories} />
  );
}