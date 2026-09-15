import HeroSection from '@/Component/shared/ReusableHero/ReusableHero';
import { ChillerProducts } from './_Component/Aircooledchiller';

export const metadata = {
  title: 'Air Cooled Chiller',
  description: 'Air Cooled Chiller Azizco',
};

export default function page() {
  return (
    <div>
      <HeroSection
        title="Air Cooled Chiller"
        subtitle="An air-cooled chiller is a type of cooling system that uses air as the primary medium to absorb and dissipate heat from a building or industrial process. It consists of a refrigeration cycle that includes a compressor, condenser, expansion valve, and evaporator. The chiller circulates chilled water through a network of pipes to provide cooling to air handling units or other cooling equipment."
        bgImage="/subhero/aircool.png"
        className="bg-black/80"
      />

      <ChillerProducts />
    </div>
  );
}
