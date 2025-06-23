import { Metadata } from 'next';
import ProductDetails from '@/components/products/ProductDetails';
import RelatedProducts from '@/components/products/RelatedProducts';

type Props = {
  params: { id: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // In a real app, fetch product data here
  return {
    title: 'Product Name | Lumière Beauty',
    description: 'Product description for SEO',
  };
}

export default function ProductPage({ params }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ProductDetails productId={params.id} />
      <RelatedProducts />
    </div>
  );
}