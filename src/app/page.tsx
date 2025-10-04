import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Categories from "@/components/home/Categories";
import SpecialOffers from "@/components/home/SpecialOffers";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="w-full">
      <HeroCarousel />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedProducts />
        <Categories />
        {/* <SpecialOffers /> */}
        <Testimonials />
        <Newsletter />
      </div>
    </div>
  );
}