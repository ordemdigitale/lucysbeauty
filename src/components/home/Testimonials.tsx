"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Fake testimonials data
const testimonials = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Skincare Enthusiast",
    comment: "The hydrating serum completely transformed my skin. After struggling with dryness for years, I finally found a product that delivers lasting moisture without feeling heavy.",
    rating: 5,
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=120"
  },
  {
    id: 2,
    name: "Sophia Rodriguez",
    role: "Makeup Artist",
    comment: "As a professional makeup artist, I'm incredibly picky about the products I use. Lumière's foundations offer amazing coverage while still looking natural on all skin types.",
    rating: 5,
    image: "https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=120"
  },
  {
    id: 3,
    name: "Olivia Chen",
    role: "Beauty Blogger",
    comment: "I've been documenting my skincare journey for years and Lumière products have consistently remained in my top recommendations. Their commitment to quality is unmatched.",
    rating: 4,
    image: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=120"
  },
  {
    id: 4,
    name: "Jessica Miller",
    role: "Customer",
    comment: "The overnight mask is now an essential part of my evening routine. I wake up with noticeably more radiant skin, and the subtle fragrance makes the experience so luxurious.",
    rating: 5,
    image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=120"
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Avis de nos clients
          </h2>
          {/* <p className="text-gray-600 max-w-2xl mx-auto">
            Real experiences from our beauty community
          </p> */}
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <motion.div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={18} 
                          className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 italic mb-6">
                      &quot;{testimonial.comment}&quot;
                    </blockquote>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Navigation controls */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-pink-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-pink-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-2 w-8 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-pink-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}