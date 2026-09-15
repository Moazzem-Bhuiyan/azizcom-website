import HeroSection from '@/Component/shared/ReusableHero/ReusableHero';
import { YORKChillers } from './_Component/WatercooledChiller';

export const metadata = {
  title: 'Water Cooled Chiller',
  description: 'Water Cooled Chiller Azizco',
};
export default function page() {
  return (
    <div>
      <HeroSection
        title="Water Cooled Chiller"
        subtitle="A water-cooled chiller is a type of cooling system that uses water as the primary medium to absorb and dissipate heat from a building or industrial process. It consists of a refrigeration cycle that includes a compressor, condenser, expansion valve, and evaporator. The chiller circulates chilled water through a network of pipes to provide cooling to air handling units or other cooling equipment."
        bgImage="/subhero/watercooledChiller.png"
        className="bg-black/70"
      />
      <YORKChillers />
    </div>
  );
}
