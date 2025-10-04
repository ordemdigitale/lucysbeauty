import Link from 'next/link';
import { categories } from '@/lib/data2';
import { Instagram, Facebook, Twitter, Youtube, /* Mail */ } from 'lucide-react';
//import { Button } from '@/components/ui/button';
//import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-bold text-pink-900">Lucy&apos;s Beauty</h3>
            <p className="text-gray-600 text-sm">
              La science et le luxe au service de la beauté. Notre collection exclusive vous offre les produits de beauté les plus raffinés.
            </p>
            <div className="flex space-x-4">
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
              <li><Link href="/new-arrivals" className="text-gray-600 hover:text-pink-500 text-sm">New Arrivals</Link></li>
              <li><Link href="/bestsellers" className="text-gray-600 hover:text-pink-500 text-sm">Meilleures Ventes</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-pink-500 text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-pink-500 text-sm">Contact</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-pink-500 text-sm">Careers</Link></li>
              <li><Link href="/sustainability" className="text-gray-600 hover:text-pink-500 text-sm">Sustainability</Link></li>
              <li><Link href="/press" className="text-gray-600 hover:text-pink-500 text-sm">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-600 hover:text-pink-500 text-sm">Help Center</Link></li>
              <li><Link href="/shipping" className="text-gray-600 hover:text-pink-500 text-sm">Shipping & Returns</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-pink-500 text-sm">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-pink-500 text-sm">Privacy Policy</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-pink-500 text-sm">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Lucy&apos;s Beauty. Tous droits réservés.
            </p>
            {/* <div className="flex space-x-6">
              <img src="https://images.pexels.com/photos/5882719/pexels-photo-5882719.jpeg?auto=compress&cs=tinysrgb&w=50&h=32&dpr=1" alt="Payment methods" className="h-8" />
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}