"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { categories } from '@/lib/data2';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (categoryName: string) => {
    setActiveDropdown(activeDropdown === categoryName ? null : categoryName);
  };

  return (
    <>
      <div className="h-16 md:h-20" /> {/* Spacer to prevent content jump */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className={`font-playfair text-2xl font-bold ${isScrolled ? 'text-pink-900' : 'text-pink-500'}`}>
                  Lucy&apos;s Beauty
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8" ref={dropdownRef}>
              {categories.map((category) => (
                <div key={category.id} className="relative">
                  <button
                    onMouseOver={() => toggleDropdown(category.label)}
                    className={`text-sm font-medium hover:text-pink-500 transition-colors ${
                      isScrolled ? 'text-gray-600' : 'text-gray-700'
                    }`}
                  >
                    <Link href={`/category/${category.slug}`}>
                      {category.label}
                    </Link>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {/* {activeDropdown === category.label && (
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <div className="px-4 py-2 text-sm font-medium text-gray-900 border-b border-gray-100">
                          Collections
                        </div>
                        {category.collections.map((collection) => (
                          <Link
                            key={collection}
                            href={`${category.href}/${collection.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {collection}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )} */}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-gray-700'
              }`}>
                <Search size={20} />
              </button>
              
              <Link href="/cart">
                <button className={`p-2 rounded-full hover:bg-gray-100 transition-colors relative ${
                  isScrolled ? 'text-gray-600' : 'text-gray-700'
                }`}>
                  <ShoppingBag size={20} />
                  <span className="absolute top-0 right-0 h-4 w-4 text-xs flex items-center justify-center bg-pink-500 text-white rounded-full">
                    0
                  </span>
                </button>
              </Link>
              
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
                    isScrolled ? 'text-gray-600' : 'text-gray-700'
                  }`}
                >
                  <User size={20} />
                </button>
                
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link
                        href="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Sign In
                      </Link>
                      <Link
                        href="/register"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Register
                      </Link>
                      <div className="border-t border-gray-100 my-1"></div>
                      <Link
                        href="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        My Orders
                      </Link>
                      <Link
                        href="/wishlist"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Wishlist
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Mobile menu button */}
              <button 
                className={`md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-gray-700'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {categories.map((category) => (
                <Link 
                  key={category.label}
                  href={`/category/${category.slug}`}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-gray-50 rounded-md"
                >
                  {category.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-4 flex items-center space-x-3">
                <Link 
                  href="/login"
                  className="w-1/2 px-4 py-2 text-center border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="w-1/2 px-4 py-2 text-center bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}