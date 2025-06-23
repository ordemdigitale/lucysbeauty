import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductGrid from '@/components/products/ProductGrid';
import CategoryHeader from '@/components/products/CategoryHeader';
import ProductFilters from '@/components/products/ProductFilters';
import { isCategory } from '@/lib/queries';

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  const categoryName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${categoryName} | Lucy's Beauty`,
    description: `Shop our premium ${categoryName.toLowerCase()} collection at Lucy's Beauty`,
  };
}

export default async  function CategoryPage({ params }: Props) {
  const { slug } = await params;
  // Check if the category exists
  if (!isCategory(slug)) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <CategoryHeader slug={slug} />
      
      <div className="mt-8 lg:grid lg:grid-cols-4 lg:gap-x-8">
        <ProductFilters />
        <ProductGrid categorySlug={slug} />
      </div>
    </div>
  );
}
