import HeroSection from '@/Component/shared/ReusableHero/ReusableHero';
import BrandsComponent from './Component/Brands';

export const metadata = {
  title: 'Brands',
  description: 'Brands Azizco',
};
export default function page() {
  return (
    <div>
      <HeroSection
        title="Where Brands Meet Quality and Innovation"
        subtitle="Our brands are a testament to our commitment to excellence, innovation, and customer
              satisfaction."
        bgImage="/subhero/brand.png"
        className="bg-black/75"
      />
      <BrandsComponent />
    </div>
  );
}
