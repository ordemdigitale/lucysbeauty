"use client";

import { useState } from 'react';
import { Heart, Minus, Plus, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Mock product data - In a real app, this would come from an API
const product = {
  id: 1,
  name: "Hydrating Facial Serum",
  price: 48.00,
  rating: 4.5,
  reviews: 128,
  description: "Our bestselling facial serum is formulated with hyaluronic acid and vitamin C to deeply hydrate and brighten your skin. This lightweight, fast-absorbing serum helps improve skin texture and reduce the appearance of fine lines.",
  benefits: [
    "Deeply hydrates and plumps skin",
    "Improves skin texture and tone",
    "Reduces fine lines and wrinkles",
    "Suitable for all skin types"
  ],
  ingredients: "Water, Glycerin, Sodium Hyaluronate, Ascorbic Acid (Vitamin C), Niacinamide, Panthenol, Allantoin, Chamomilla Recutita (Matricaria) Flower Extract, Aloe Barbadensis Leaf Juice",
  images: [
    "https://images.pexels.com/photos/5069606/pexels-photo-5069606.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600"
  ],
  size: "30ml",
  inStock: true
};

type ProductDetailsProps = {
  productId: string;
};

export default function ProductDetails({ productId }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (change: number) => {
    setQuantity(current => Math.max(1, current + change));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Product Images */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="aspect-square overflow-hidden rounded-lg bg-gray-100"
        >
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
        
        <div className="grid grid-cols-3 gap-4">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square overflow-hidden rounded-lg bg-gray-100 ${
                selectedImage === index ? 'ring-2 ring-pink-500' : ''
              }`}
            >
              <img
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="h-full w-full object-cover object-center"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-playfair text-3xl font-bold text-gray-900">
            {product.name}
          </h1>
          
          <div className="mt-4 flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={`${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">
              ({product.reviews} reviews)
            </span>
          </div>

          <p className="mt-4 text-2xl font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </p>

          <div className="mt-8 space-y-6">
            <p className="text-gray-600">{product.description}</p>

            <div>
              <h3 className="text-sm font-medium text-gray-900">Benefits</h3>
              <ul className="mt-2 space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-pink-500 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900">Key Ingredients</h3>
              <p className="mt-2 text-sm text-gray-600">{product.ingredients}</p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQuantity(-1)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(1)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <Heart size={24} className="text-gray-400 hover:text-pink-500" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full"
                >
                  Buy Now
                </Button>
                <Button
                  size="lg"
                  className="w-full bg-pink-600 hover:bg-pink-700"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}