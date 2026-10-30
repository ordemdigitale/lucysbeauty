/* src/types/index.ts */
import { InferSelectModel } from "drizzle-orm";
import { categories, products } from "@/db/schema";

// Inferred types from schema
export type TCategory = InferSelectModel<typeof categories>;
export type TProduct = InferSelectModel<typeof products>;

// Helper types
export type CategorySlug = TCategory["slug"];

export interface CategoryWithImage extends TCategory {
    image: string;
};