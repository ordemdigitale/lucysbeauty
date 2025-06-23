"use client";

import { motion } from 'framer-motion';

type CategoryHeaderProps = {
  slug: string;
};

export default function CategoryHeader({ slug }: CategoryHeaderProps) {
  const categoryName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const descriptions = {
    skincare: "Discover our scientifically formulated skincare products designed to nourish, protect, and enhance your skin's natural beauty.",
    makeup: "Express yourself with our premium makeup collection, featuring high-performance products for every look and occasion.",
    haircare: "Transform your hair with our professional-grade haircare products, formulated for all hair types and concerns.",
    fragrance: "Explore our curated collection of luxurious fragrances that capture the essence of sophistication and style.",
    body: "Indulge in our body care collection, designed to pamper and nourish your skin from head to toe."
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {categoryName}
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        {descriptions[slug as keyof typeof descriptions]}
      </p>
    </motion.div>
  );
}