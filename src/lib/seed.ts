/* src/lib/seed.ts */
import { db } from "@/db/index";
import { categories, products } from "@/db/schema";

export async function seedDatabase() {
    // Seed categories
    await db.insert(categories).values([
        {
            slug: "visage",
            label: "Visage",
            description: "Signature scents for every occasion",
            image: "https://images.pexels.com/photos/3762873/pexels-photo-3762873.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            slug: "maquillage",
            label: "Maquillage",
            description: "Rehaussez votre beauté naturelle grâce à notre collection",
            image: "https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            slug: "cheveux",
            label: "Cheveux",
            description: "Privilégiez la santé de vos cheveux avec notre collection",
            image: "https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            slug: "corps",
            label: "Corps",
            description: "Science-backed formulations for radiant skin",
            image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ]);

    // Seed products
    await db.insert(products).values([
        {
            name: "Revitalizing Vitamin C Serum",
            description: "Brightens skin and boosts collagen with 20% Vitamin C.",
            categorySlug: "corps",
            price: 25.0,
            currency: "USD",
            images: ["/images/vitc-serum-1.jpg", "/images/vitc-serum-2.jpg"],
            stock: 120,
            sku: "GP-VITC-20ML",
            salesCount: 150,
            isBestSeller: 0,
            rating: 4.7,
            createdAt: "2025-04-15T08:30:00Z",
            updatedAt: "2025-06-01T10:00:00Z",
        },
        {
            name: "Hydrating Hyaluronic Acid Moisturizer",
            description: "24‑hour hydration with 2% Hyaluronic Acid + Peptides.",
            categorySlug: "visage",
            price: 30.0,
            currency: "USD",
            images: ["/images/hyaluronic-1.jpg", "/images/hyaluronic-2.jpg", "/images/hyaluronic-3.jpg"],
            stock: 80,
            sku: "HB-HYAL-50G",
            salesCount: 200,
            isBestSeller: 0,
            rating: 4.9,
            createdAt: "2025-03-20T09:15:00Z",
            updatedAt: "2025-06-05T11:00:00Z",
        },
        {
            name: "Nourishing Shea Butter Lip Balm",
            description: "Ultra‑rich balm with shea butter & mint.",
            categorySlug: "corps",
            price: 8.0,
            currency: "USD",
            images: ["/images/lipbalm-1.jpg"],
            stock: 200,
            sku: "LL-SHEA-LIP",
            salesCount: 90,
            isBestSeller: 0,
            rating: 4.5,
            createdAt: "2025-02-01T12:00:00Z",
            updatedAt: "2025-05-15T08:20:00Z",
        },
        {
            name: "Purifying Charcoal Clay Mask",
            description: "Detoxifies pores and removes excess oil.",
            categorySlug: "visage",
            price: 18.0,
            currency: "USD",
            images: ["/images/charcoal-mask-1.jpg"],
            stock: 60,
            sku: "PZ-CHAR-100ML",
            salesCount: 120,
            isBestSeller: 0,
            rating: 3.5,
            createdAt: "2025-01-10T14:45:00Z",
            updatedAt: "2025-04-20T09:30:00Z",
        },
        {
            name: "SPF 50 Mineral Sunscreen Stick",
            description: "Broad‑spectrum SPF 50 in a mess‑free stick.",
            categorySlug: "visage",
            price: 12.0,
            currency: "USD",
            images: ["/images/sunscreen-stick-1.jpg", "/images/sunscreen-stick-2.jpg"],
            stock: 150,
            sku: "SG-SPF50-STICK",
            salesCount: 180,
            isBestSeller: 0,
            rating: 3.8,
            createdAt: "2025-04-01T10:00:00Z",
            updatedAt: "2025-05-30T13:00:00Z",
        },
    ]);
};