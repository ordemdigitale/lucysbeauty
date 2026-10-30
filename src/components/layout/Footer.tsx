<<<<<<< HEAD
import Link from 'next/link';
import { categories } from '@/lib/data2';
import { Instagram, Facebook, Twitter, Youtube, /* Mail */ } from 'lucide-react';
//import { Button } from '@/components/ui/button';
//import { Input } from '@/components/ui/input';
=======
import React from 'react'
import Link from 'next/link'
import Icon from '@/components/ui/icons'
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'; // replace with https://simpleicons.org/
>>>>>>> e531889189018d6610ef48a52fc00235834c9c01

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">{/* div grid // grid grid-cols-1 md:grid-cols-4 gap-8 //*/}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-bold text-pink-900">Lucy&apos;s Beauty</h3>
            <p className="text-gray-600 text-sm">
              La science et le luxe au service de la beauté. Notre collection exclusive vous offre les produits de beauté les plus raffinés.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Boutique</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-pink-500 text-sm">Visage</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-500 text-sm">Maquillage</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-500 text-sm">Cheveux</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-500 text-sm">Corps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Liens utiles</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-pink-500 text-sm">Qui sommes-nous</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-500 text-sm">CGU</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-500 text-sm">Confidentialité</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-500 text-sm">Politique de retour</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-500 text-sm">Aide & FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Service client</h4>
            <div className="space-y-2 text-gray-600 text-sm">
              <p>Tel: 01 23 45 67 89</p>
              <p>E-mail: info@lucysbeauty.com</p>
            </div>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
<<<<<<< HEAD
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Boutique</h4>
            <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <Link className="text-gray-600 hover:text-pink-500 text-sm" href={`/category/${category.slug}`}>
                  {category.label}
                </Link>
              </li>
            ))}
              <li><Link href="/new-arrivals" className="text-gray-600 hover:text-pink-500 text-sm">Nouveautés</Link></li>
              <li><Link href="/bestsellers" className="text-gray-600 hover:text-pink-500 text-sm">Meilleures Ventes</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">La Marque</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-pink-500 text-sm">À propos</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-pink-500 text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Service Client</h4>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-600 hover:text-pink-500 text-sm">Centre d&apos;aide</Link></li>
              <li><Link href="/shipping" className="text-gray-600 hover:text-pink-500 text-sm">Expédition & Retours</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-pink-500 text-sm">Conditions Générales</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-pink-500 text-sm">Politique de Confidentialité</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-pink-500 text-sm">FAQ</Link></li>
            </ul>
          </div>
=======
        </div>

        {/* Mode de paiement */}
        <div className='text-gray-600 flex items-center gap-3 justify-center text-sm'>
          <span>Modes de paiement:</span>
          <Icon name="paypal" />
          <Icon name="visa" />
          <Icon name="mastercard" />
>>>>>>> e531889189018d6610ef48a52fc00235834c9c01
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 pt-4 flex items-center justify-center flex-col">
          <span className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Lucy&apos;s Beauty. Tous droits réservés.
          </span>
        </div>

      </div>
    </footer>
  )
}

export default Footer