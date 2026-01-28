import HeroSection from '@/Component/shared/ReusableHero/ReusableHero';
import React from 'react';
import { BuildingMaterials } from './_Component/BuildingMaterials';

export const metadata = {
  title: 'Building Materials - Aziz Company Limited',
  description:
    'Explore our wide range of high-quality building materials for construction and renovation projects. From cement and bricks to tiles and roofing materials, we provide everything you need to build strong and durable structures. Our products are sourced from trusted manufacturers to ensure reliability and performance. Whether you are a contractor, builder, or DIY enthusiast, Aziz Company Limited is your go-to destination for all your building material needs.',
};

export default function page() {
  return (
    <div>
      <HeroSection
        title="Building Materials"
        subtitle="Explore our wide range of high-quality building materials for construction and renovation projects. From cement and bricks to tiles and roofing materials, we provide everything you need to build strong and durable structures. Our products are sourced from trusted manufacturers to ensure reliability and performance. Whether you are a contractor, builder, or DIY enthusiast, Aziz Company Limited is your go-to destination for all your building material needs."
        bgImage="/subhero/EleveatorEscalators.png"
      />

      <BuildingMaterials />
    </div>
  );
}
