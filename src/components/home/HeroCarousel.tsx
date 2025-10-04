"use client";

import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    title: "Collection éclatante",
    subtitle: "Illuminez votre beauté naturelle",
    description: "Découvrez notre nouvelle gamme de produits hydratants pour un teint radieux toute l'année.",
    buttonText: "Acheter",
    buttonLink: "/collection/summer-glow",
    image: "https://images.pexels.com/photos/32145471/pexels-photo-32145471/free-photo-of-femme-elegante-avec-un-maquillage-audacieux-et-un-foulard.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&drp=1"
  },
  {
    id: 2,
    title: "Les indispensables pour une beauté nette.",
    subtitle: "Pure. Naturel. Vous.",
    description: "Des produits de beauté propres, formulés avec des ingrédients naturels pour une peau saine et éclatante.",
    buttonText: "Explorer",
    buttonLink: "/category/clean-beauty",
    image: "https://images.pexels.com/photos/3762876/pexels-photo-3762876.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
  },
  {
    id: 3,
    title: "Rituel de soins pour la peau",
    subtitle: "Redéfinir les soins personnels",
    description: "Profitez de notre gamme de produits premium, conçu pour transformer votre routine quotidienne en une expérience unique.",
    buttonText: "Découvrir",
    buttonLink: "/category/luxury-skincare",
    image: "https://images.pexels.com/photos/3192175/pexels-photo-3192175.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
          
          <div className="relative z-20 h-full flex items-center justify-start px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="max-w-xl text-white animate-fade-in-up">
              <h2 className="text-sm sm:text-base uppercase tracking-wider mb-2 opacity-90">
                {slide.subtitle}
              </h2>
              <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg mb-8 max-w-md opacity-90">
                {slide.description}
              </p>
              <Button 
                size="lg" 
                className="bg-white text-pink-900 hover:bg-pink-50"
                asChild
              >
                <a href={slide.buttonLink}>{slide.buttonText}</a>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ArrowLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ArrowRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}