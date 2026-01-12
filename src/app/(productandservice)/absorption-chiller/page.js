import HeroSection from '@/Component/shared/ReusableHero/ReusableHero';
import React from 'react';
import { SteamAndHotWaterChillers } from './_component/AbsorptionChiller';
export const metadata = {
  title: 'Absorption Chiller',
  description: 'Absorption Chiller Azizco',
};
const page = () => {
  return (
    <div>
      <HeroSection
        title="Absorption Chiller"
        subtitle="An absorption chiller is a type of cooling system that uses a thermal energy source to drive the refrigeration cycle, typically using heat from natural gas, steam, or solar energy. It operates on the principle of absorption refrigeration, where a refrigerant is absorbed into a solution and then released to provide cooling."
        bgImage="/subhero/AbsorptionChiller.png"
        className="bg-black/80"
      />
      <SteamAndHotWaterChillers />
    </div>
  );
};

export default page;
