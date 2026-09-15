import HeroSection from '@/Component/shared/ReusableHero/ReusableHero';
import { HydraulicLiftProducts } from './_Component/Parking-Solutions';

export const metadata = {
  title: 'Parking Solutions',
  description: 'Parking Solutions Azizco',
};

export default function page() {
  return (
    <div>
      <HeroSection
        title="Parking Solutions"
        subtitle="A parking solution provides automated or managed systems to organize, monitor, and optimize vehicle parking. It includes technologies such as smart sensors, access control, payment systems, and guidance displays to improve efficiency, security, and space utilization in commercial, residential, or industrial areas."
        bgImage="/subhero/Parking-Solutions.png"
      />
      <HydraulicLiftProducts />
    </div>
  );
}
