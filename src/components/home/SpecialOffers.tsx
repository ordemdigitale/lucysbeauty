"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SpecialOffers() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="relative rounded-xl overflow-hidden group"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <Image 
              src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="New Customer Offer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
            <p className="text-pink-300 uppercase tracking-wider text-sm font-medium mb-2">Limited Time</p>
            <h3 className="text-white font-playfair text-2xl md:text-3xl font-bold mb-3">
              New Customer Offer
            </h3>
            <p className="text-white/90 mb-4 max-w-md">
              Get 15% off your first order and a free sample with code WELCOME15
            </p>
            <Link 
              href="/products"
              className="inline-block bg-white text-pink-900 hover:bg-pink-50 px-5 py-2.5 rounded-md font-medium transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          className="relative rounded-xl overflow-hidden group"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <Image 
              src="https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Loyalty Program"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              width={800}
              height={600}
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
            <p className="text-pink-300 uppercase tracking-wider text-sm font-medium mb-2">Exclusive Benefits</p>
            <h3 className="text-white font-playfair text-2xl md:text-3xl font-bold mb-3">
              Join Our Loyalty Program
            </h3>
            <p className="text-white/90 mb-4 max-w-md">
              Earn points on every purchase and unlock premium rewards and early access
            </p>
            <Link 
              href="/loyalty"
              className="inline-block bg-white text-pink-900 hover:bg-pink-50 px-5 py-2.5 rounded-md font-medium transition-colors"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}