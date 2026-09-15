import HeroSection from '@/Component/shared/ReusableHero/ReusableHero';
import React from 'react';
import { ChillerAndCoolerProducts } from './_Component/Preciouairconditioning';

export const metadata = {
  title: 'Absorption Chiller',
  description: 'Absorption Chiller Azizco',
};
export default function page() {
  return (
    <div>
      <HeroSection
        title="Preciou Air Conditioning"
        subtitle="Preciou Air Conditioning is a leading provider of high-quality air conditioning solutions, offering a wide range of products and services to meet the cooling needs of residential, commercial, and industrial clients. With a commitment to energy efficiency, reliability, and customer satisfaction, Preciou Air Conditioning delivers innovative HVAC systems that ensure optimal indoor comfort year-round."
        bgImage="/subhero/preciou-air-conditioning.png"
        className="bg-black/80"
      />
      <ChillerAndCoolerProducts />
    </div>
  );
}
