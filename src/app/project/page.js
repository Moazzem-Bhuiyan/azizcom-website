import React from 'react';
import ProjectsShowcase from './_Component/AllProject';
import HeroSection from '@/Component/shared/ReusableHero/ReusableHero';

export default function page() {
  return (
    <div className="bg-linear-to-r from-blue-50 to-black-100">
      <HeroSection
        title=" Complete Projects"
        subtitle=" Explore over 140 successfully completed construction and engineering projects across
            Bangladesh, showcasing our expertise and commitment to excellence."
        bgImage="/hero/project.png"
        className={'bg-black/70'}
      />
      <ProjectsShowcase />
    </div>
  );
}
