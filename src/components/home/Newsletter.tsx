"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally connect to an API
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rejoindre la communauté
          </h2>
          <p className="text-gray-600 mb-8">
            Abonnez-vous à notre newsletter pour bénéficier d&apos;offres exclusives, de conseils de beauté et d&apos;un accès privilégié aux lancements de nouveaux produits.
          </p>

          {isSubmitted ? (
            <div className="bg-green-50 text-green-800 p-4 rounded-lg animate-fade-in">
              <p className="font-medium">Merci de vous être abonné !</p>
              <p className="text-sm mt-1">Nous avons envoyé une confirmation à votre e-mail.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Saisissez votre e-mail ici"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow"
              />
              <Button 
                type="submit" 
                className="bg-pink-600 hover:bg-pink-700 text-white"
              >
                S&apos;abonner
              </Button>
            </form>
          )}

          <p className="text-xs text-gray-500 mt-4">
            En vous abonnant, vous acceptez notre politique de confidentialité et consentez à recevoir des mises à jour par e-mail.
          </p>
        </motion.div>
      </div>
    </section>
  );
}