import { Metadata } from 'next';
import ProductDetails from '@/components/products/ProductDetails';
import RelatedProducts from '@/components/products/RelatedProducts';

type Props = {
  params: Promise<{ id: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  // In a real app, fetch product data here
  return {
    title: `Product ${id} detail | Lucy's Beauty`,
    description: 'Product description for SEO',
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ProductDetails productId={id} />
      <RelatedProducts />
    </div>
  );
}