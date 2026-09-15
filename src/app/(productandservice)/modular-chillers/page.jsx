import React from 'react';
import ChillersProductDisplay from './_Component/ModularChillers';
import HeroSection from '@/Component/shared/ReusableHero/ReusableHero';
export const metadata = {
  title: 'Modular Chillers - Aziz Company',
  description:
    'Explore our range of modular chillers designed for efficiency and reliability. Perfect for various commercial applications, our chillers offer scalable cooling solutions tailored to your needs.',
};
export default function page() {
  return (
    <div>
      <HeroSection
        bgImage="/hero/modular-chillers.png"
        title="Modular Chillers"
        subtitle="Explore our range of modular chillers designed for efficiency and reliability. Perfect for various commercial applications, our chillers offer scalable cooling solutions tailored to your needs."
      />
      <ChillersProductDisplay />
    </div>
  );
}
