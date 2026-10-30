/** src/db/queries/categories-select.ts
 * Categories select queries
*/
import { db } from "@/db/index";
import { categories } from "@/db/schema";
import { unstable_cache } from "next/cache";

export const getCategories = unstable_cache(
    async () => {
        return await db.select().from(categories);
    },
    ["navbar-categories-cache"],
    {
        tags: ["categories-tag"]
    }
);