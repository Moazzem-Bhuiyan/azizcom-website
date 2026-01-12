// app/components/HeroSection.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Animatetext from '../AnimatedText/AnimatedText';

const HeroSection = ({ title, bgImage, subtitle, className }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <div
      className="w-full h-96 flex flex-col justify-center items-center text-white bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 bg-black/50 ${className}`}></div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <Animatetext duration={1} x={0} y={20}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        </Animatetext>
        <Animatetext duration={1} x={0} y={-20}>
          <h1 className="text-sm md:text-md font-medium mb-4">{subtitle}</h1>
        </Animatetext>

        <nav className="text-sm md:text-base">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {pathSegments.map((segment, idx) => {
            const path = '/' + pathSegments.slice(0, idx + 1).join('/');
            return (
              <span key={idx}>
                {' '}
                →{' '}
                <Link href={path} className="hover:underline capitalize">
                  {segment.replace(/-/g, ' ')}
                </Link>
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default HeroSection;
