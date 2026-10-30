/** src/lib/schema.ts
 * Schema definition using sqlite
*/
import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core"

// Categories table
export const categories = sqliteTable("categories", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    slug: text("slug").notNull().unique(),
    label: text("slug").notNull(),
    description: text("description").notNull(),
    image: text("image").notNull().default(""),
});

// Products table
export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description").notNull(),
  categorySlug: text("category_slug")
    .notNull()
    .references(() => categories.slug),
  price: real("price").notNull(),
  currency: text("currency").notNull().default("USD"),
  images: text("images", { mode: "json" })
    .$type<string[]>()
    .notNull()
    .default([]),
  stock: integer("stock").notNull(),
  sku: text("sku").notNull().unique(),
  salesCount: integer("sales_count").notNull().default(0),
  isBestSeller: integer("is_best_seller").notNull().default(0), // SQLite uses 0/1 for boolean
  rating: real("rating").notNull(),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});