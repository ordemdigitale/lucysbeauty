// src/lib/data/products.ts

export interface Review {
  id: number;
  reviewer: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Variant {
  id: number;
  name: string;
  price: number;
  stock: number;
  image?: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  discount?: number; // percentage
  finalPrice: number;
  currency: string;
  images: string[]; // max 4
  stock: number;
  sku: string;
  rating: number; // avg
  reviews: Review[];
  variants?: Variant[];
  createdAt: string;
  updatedAt: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Revitalizing Vitamin C Serum",
    description: "Brightens skin and boosts collagen with 20% Vitamin C.",
    brand: "GlowPure",
    category: "Serum",
    price: 25.0,
    discount: 10,
    finalPrice: 22.5,
    currency: "USD",
    images: [
      "/images/vitc-serum-1.jpg",
      "/images/vitc-serum-2.jpg",
      "/images/vitc-serum-3.jpg"
    ],
    stock: 120,
    sku: "GP-VITC-20ML",
    rating: 4.7,
    reviews: [
      {
        id: 101,
        reviewer: "Alice Smith",
        rating: 5,
        comment: "My skin has never looked so radiant!",
        date: "2025-05-10"
      },
      {
        id: 102,
        reviewer: "Jane Doe",
        rating: 4,
        comment: "Good serum, a bit sticky but effective.",
        date: "2025-05-12"
      }
    ],
    createdAt: "2025-04-15T08:30:00Z",
    updatedAt: "2025-05-01T10:00:00Z"
  },
  {
    id: 2,
    title: "Hydrating Hyaluronic Acid Moisturizer",
    description: "24‑hour hydration with 2% Hyaluronic Acid + Peptides.",
    brand: "HydraBloom",
    category: "Moisturizer",
    price: 30.0,
    finalPrice: 30.0,
    currency: "USD",
    images: [
      "/images/hyaluronic-1.jpg",
      "/images/hyaluronic-2.jpg",
      "/images/hyaluronic-3.jpg",
      "/images/hyaluronic-4.jpg"
    ],
    stock: 80,
    sku: "HB-HYAL-50G",
    rating: 4.9,
    reviews: [
      {
        id: 103,
        reviewer: "Eva Green",
        rating: 5,
        comment: "Lightweight and so hydrating!",
        date: "2025-05-05"
      },
      {
        id: 104,
        reviewer: "Mark Turner",
        rating: 4,
        comment: "Great for dry skin.",
        date: "2025-05-07"
      }
    ],
    variants: [
      { id: 201, name: "50 g", price: 30.0, stock: 80, image: "/images/hyaluronic-1.jpg" },
      { id: 202, name: "100 g", price: 50.0, stock: 45, image: "/images/hyaluronic-1.jpg" }
    ],
    createdAt: "2025-03-20T09:15:00Z",
    updatedAt: "2025-04-10T11:00:00Z"
  },
  {
    id: 3,
    title: "Nourishing Shea Butter Lip Balm",
    description: "Ultra‑rich balm with shea butter & mint.",
    brand: "LuxeLips",
    category: "Lip Care",
    price: 8.0,
    finalPrice: 8.0,
    currency: "USD",
    images: ["/images/lipbalm-1.jpg"],
    stock: 200,
    sku: "LL-SHEA-LIP",
    rating: 4.5,
    reviews: [
      {
        id: 105,
        reviewer: "Sam Lee",
        rating: 5,
        comment: "Perfect for dry winter lips!",
        date: "2025-04-22"
      }
    ],
    createdAt: "2025-02-01T12:00:00Z",
    updatedAt: "2025-03-01T08:20:00Z"
  },
  {
    id: 4,
    title: "Purifying Charcoal Clay Mask",
    description: "Detoxifies pores and removes excess oil.",
    brand: "PureZen",
    category: "Mask",
    price: 18.0,
    discount: 15,
    finalPrice: 15.3,
    currency: "USD",
    images: [
      "/images/charcoal-mask-1.jpg",
      "/images/charcoal-mask-2.jpg"
    ],
    stock: 60,
    sku: "PZ-CHAR-100ML",
    rating: 4.2,
    reviews: [
      {
        id: 106,
        reviewer: "Chris Yong",
        rating: 4,
        comment: "Leaves skin super clean.",
        date: "2025-05-02"
      }
    ],
    createdAt: "2025-01-10T14:45:00Z",
    updatedAt: "2025-02-20T09:30:00Z"
  },
  {
    id: 5,
    title: "SPF 50 Mineral Sunscreen Stick",
    description: "Broad‑spectrum SPF 50 in a mess‑free stick.",
    brand: "SunGuard",
    category: "Sunscreen",
    price: 12.0,
    finalPrice: 12.0,
    currency: "USD",
    images: [
      "/images/sunscreen-stick-1.jpg",
      "/images/sunscreen-stick-2.jpg",
      "/images/sunscreen-stick-3.jpg",
      "/images/sunscreen-stick-4.jpg"
    ],
    stock: 150,
    sku: "SG-SPF50-STICK",
    rating: 4.8,
    reviews: [
      {
        id: 107,
        reviewer: "Patricia Hall",
        rating: 5,
        comment: "So convenient for re‑applying!",
        date: "2025-05-08"
      },
      {
        id: 108,
        reviewer: "Ronald White",
        rating: 4,
        comment: "Great for travel!",
        date: "2025-05-09"
      }
    ],
    createdAt: "2025-04-01T10:00:00Z",
    updatedAt: "2025-04-15T13:00:00Z"
  }
];
