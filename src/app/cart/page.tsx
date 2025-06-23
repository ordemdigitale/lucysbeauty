import { Metadata } from 'next';
import CartContent from '@/components/cart/CartContent';

export const metadata: Metadata = {
  title: 'Shopping Cart | Lumière Beauty',
  description: 'View your shopping cart',
};

export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <CartContent />
    </div>
  );
}