"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Fake product data for the frontend mockup
const products = [
  {
    id: 1,
    name: "Hydrating Facial Serum",
    category: "Skincare",
    price: 48,
    image: "https://uwjmkfyhjkzicglfdsvz.supabase.co/storage/v1/object/public/various-pics/skincare.webp"
  },
  {
    id: 2,
    name: "Radiance Facial Oil",
    category: "Skincare",
    price: 65,
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "Volumizing Mascara",
    category: "Makeup",
    price: 28,
    image: "https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    name: "Matte Lipstick Collection",
    category: "Makeup",
    price: 34,
    image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    name: "Rejuvenating Night Cream",
    category: "Skincare",
    price: 58,
    image: "https://images.pexels.com/photos/3786599/pexels-photo-3786599.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 6,
    name: "Silk Pillowcase",
    category: "Accessories",
    price: 45,
    image: "https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 7,
    name: "Nourishing Hair Mask",
    category: "Haircare",
    price: 38,
    image: "https://images.pexels.com/photos/3737600/pexels-photo-3737600.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 8,
    name: "Jade Face Roller",
    category: "Tools",
    price: 32,
    image: "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export default function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Meilleures ventes
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez nos produits les plus appréciés, soigneusement formulés pour mettre en valeur votre beauté naturelle
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: product.id * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
              
              <button 
                className="absolute top-3 right-3 p-2 rounded-full bg-white/80 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                aria-label="Add to wishlist"
              >
                <Heart size={18} className="text-gray-600 hover:text-pink-500 transition-colors" />
              </button>
              
              <div className={`absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm p-4 transition-transform duration-300 ${
                hoveredProduct === product.id ? 'translate-y-0' : 'translate-y-full'
              }`}>
                <button className="w-full py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium rounded-md transition-colors">
                  Ajouter au panier
                </button>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500 mb-1">{product.category}</p>
              <h3 className="text-gray-900 font-medium">
                <Link href={`/product/${product.id}`} className="hover:text-pink-600 transition-colors">
                  {product.name}
                </Link>
              </h3>
              <p className="mt-1 text-gray-900 font-semibold">${product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/products"
          className="inline-block border border-pink-600 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-md font-medium transition-colors"
        >
          Tout voir
        </Link>
      </div>
    </section>
  );
}