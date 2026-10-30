// src/scripts/seed.ts
import { seedDatabase } from "@/lib/seed";

async function main() {
  console.log("🌱 Seeding database...");
  await seedDatabase();
  console.log("✅ Database seeded successfully!");
}

main().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
