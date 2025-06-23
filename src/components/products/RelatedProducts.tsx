"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const relatedProducts = [
  {
    id: 2,
    name: "Radiance Facial Oil",
    price: 65.00,
    rating: 4.8,
    reviews: 89,
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "Rejuvenating Night Cream",
    price: 58.00,
    rating: 4.6,
    reviews: 156,
    image: "https://images.pexels.com/photos/3786599/pexels-photo-3786599.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    name: "Vitamin C Serum",
    price: 52.00,
    rating: 4.7,
    reviews: 203,
    image: "https://images.pexels.com/photos/4465821/pexels-photo-4465821.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    name: "Hydrating Toner",
    price: 32.00,
    rating: 4.5,
    reviews: 178,
    image: "https://images.pexels.com/photos/4465815/pexels-photo-4465815.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export default function RelatedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="mt-24">
      <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-8">
        You May Also Like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
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
                  Add to Cart
                </button>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-gray-900 font-medium">
                <Link href={`/product/${product.id}`} className="hover:text-pink-600 transition-colors">
                  {product.name}
                </Link>
              </h3>
              <p className="mt-1 text-gray-900 font-semibold">${product.price.toFixed(2)}</p>
              <div className="mt-1 flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">
                  ({product.reviews})
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}