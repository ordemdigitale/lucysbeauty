// src/lib/data2.ts

// === Categories ===
export const categories = [
  {
    id: 1,
    slug: "visage",
    label: "Visage",
    description: "Science-backed formulations for radiant skin",
    image: "https://images.pexels.com/photos/3762873/pexels-photo-3762873.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    slug: "maquillage",
    label: "Maquillage",
    description: "Enhance your natural beauty with our premium collection",
    image: "https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    slug: "cheveux",
    label: "Cheveux",
    description: "Signature scents for every occasion",
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    slug: "corps",
    label: "Corps",
    description: "Nourish and style for healthy, beautiful hair",
    image: "https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
] as const;
export type Category = typeof categories[number]["slug"];

/* const categories = [
  { 
    name: 'Visage',
    href: '/category/visage',
    collections: ['New Arrivals', 'Best Sellers', 'Limited Edition', 'All Skincare']
  },
  { 
    name: 'Maquillage',
    href: '/category/maquillage',
    collections: ['New Arrivals', 'Best Sellers', 'Limited Edition', 'All Makeup']
  },
  { 
    name: 'Corps',
    href: '/category/corps',
    collections: ['New Arrivals', 'Best Sellers', 'Limited Edition', 'All Haircare']
  },
  { 
    name: 'Cheveux',
    href: '/category/cheveux',
    collections: ['New Arrivals', 'Best Sellers', 'Limited Edition', 'All Fragrance']
  }
]; */


export interface Product {
  id: number;
  name: string;
  description: string;
  category: Category;
  price: number;
  currency: string;
  images: string[];
  stock: number;
  sku: string;
  salesCount: number;
  isBestSeller: boolean;
  rating: number; // avg
  createdAt: string;
  updatedAt: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Revitalizing Vitamin C Serum",
    description: "Brightens skin and boosts collagen with 20% Vitamin C.",
    category: "corps",
    price: 25.0,
    currency: "USD",
    images: ["/images/vitc-serum-1.jpg", "/images/vitc-serum-2.jpg"],
    stock: 120,
    sku: "GP-VITC-20ML",
    salesCount: 150,
    isBestSeller: false,
    rating: 4.7,
    createdAt: "2025-04-15T08:30:00Z",
    updatedAt: "2025-06-01T10:00:00Z",
  },
  {
    id: 2,
    name: "Hydrating Hyaluronic Acid Moisturizer",
    description: "24‑hour hydration with 2% Hyaluronic Acid + Peptides.",
    category: "visage",
    price: 30.0,
    currency: "USD",
    images: [
      "/images/hyaluronic-1.jpg",
      "/images/hyaluronic-2.jpg",
      "/images/hyaluronic-3.jpg",
    ],
    stock: 80,
    sku: "HB-HYAL-50G",
    salesCount: 200,
    isBestSeller: false,
    rating: 4.9,
    createdAt: "2025-03-20T09:15:00Z",
    updatedAt: "2025-06-05T11:00:00Z",
  },
  {
    id: 3,
    name: "Nourishing Shea Butter Lip Balm",
    description: "Ultra‑rich balm with shea butter & mint.",
    category: "corps",
    price: 8.0,
    currency: "USD",
    images: ["/images/lipbalm-1.jpg"],
    stock: 200,
    sku: "LL-SHEA-LIP",
    salesCount: 90,
    isBestSeller: false,
    rating: 4.5,
    createdAt: "2025-02-01T12:00:00Z",
    updatedAt: "2025-05-15T08:20:00Z",
  },
  {
    id: 4,
    name: "Purifying Charcoal Clay Mask",
    description: "Detoxifies pores and removes excess oil.",
    category: "visage",
    price: 18.0,
    currency: "USD",
    images: ["/images/charcoal-mask-1.jpg"],
    stock: 60,
    sku: "PZ-CHAR-100ML",
    salesCount: 120,
    isBestSeller: false,
    rating: 3.5,
    createdAt: "2025-01-10T14:45:00Z",
    updatedAt: "2025-04-20T09:30:00Z",
  },
  {
    id: 5,
    name: "SPF 50 Mineral Sunscreen Stick",
    description: "Broad‑spectrum SPF 50 in a mess‑free stick.",
    category: "visage",
    price: 12.0,
    currency: "USD",
    images: ["/images/sunscreen-stick-1.jpg", "/images/sunscreen-stick-2.jpg"],
    stock: 150,
    sku: "SG-SPF50-STICK",
    salesCount: 180,
    isBestSeller: false,
    rating: 3.8,
    createdAt: "2025-04-01T10:00:00Z",
    updatedAt: "2025-05-30T13:00:00Z",
  },
];
