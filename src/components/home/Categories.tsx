"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { categories } from '@/lib/data2';


export default function Categories() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Les catégories
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez nos catégories qui sont chacune composée des meilleurs produits
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <motion.div 
            key={category.id}
            className="relative overflow-hidden rounded-lg group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[16/9] overflow-hidden">
              <Image 
                src={category.image} 
                alt={category.label}
                width={800}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
              <h3 className="text-white font-playfair text-2xl md:text-3xl font-bold mb-2">
                {category.label}
              </h3>
              <p className="text-white/80 mb-4 max-w-md">
                {category.description}
              </p>
              <Link 
                href={`/category/${category.slug}`}
                className="inline-flex items-center text-white border-b border-white pb-1 hover:text-pink-200 hover:border-pink-200 transition-colors w-fit"
              >
                Explorer
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}