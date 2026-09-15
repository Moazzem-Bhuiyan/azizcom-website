import HeroSection from '@/Component/shared/ReusableHero/ReusableHero';
import { ElevatorProducts } from './_Component/EleveatorEscalators';
import ElevatorEscalatorInfo from './_Component/EleveatorEscalatorsInfo';

export const metadata = {
  title: 'Elevator & Escalators',
  description: 'Elevator & Escalators Azizco',
};

export default function page() {
  return (
    <div>
      <HeroSection
        title="Elevator & Escalators"
        subtitle="An elevator is a vertically moving transport system used to carry passengers or goods between floors in buildings.An escalator is a moving staircase designed to transport people between floors continuously."
        bgImage="/subhero/EleveatorEscalators.png"
      />
      <ElevatorEscalatorInfo />
      <ElevatorProducts />
    </div>
  );
}
