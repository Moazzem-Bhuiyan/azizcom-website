import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Animatetext from '@/Component/shared/AnimatedText/AnimatedText';

const slides = [
  {
    title: 'North south University',
    desc: 'cooling capacity 3100 TR',
    image: '/hero/herobg1.png',
    productImage: '/hero/nsu.png',
  },
  {
    title: 'Jinnat Spinning Mills Ltd.',
    desc: 'Cooling Capacity: 3,200 TR (YHAU)',
    image: '/hero/herobg1.png',
    productImage: '/hero/mills.png',
  },
  {
    title: 'Basundhara Sports Complex, School',
    desc: 'Cooling Capacity: 600 (YVAA).',
    image: '/hero/herobg1.png',
    productImage: '/hero/bashundara.png',
  },
  {
    title: 'AGA KHAN ACADEMY, DHAKA',
    desc: 'cooling capacity- 1200 TR',
    image: '/hero/herobg1.png',
    productImage: '/hero/agakhan.png',
  },
];

export function Hero() {
  return (
    <Carousel className="w-full h-[70vh]">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div
              className="relative h-[70vh] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Content */}
              <div className="relative z-10 flex justify-between h-full items-center px-10 md:px-20">
                <div className="max-w-4xl px-6 md:px-16 text-white">
                  <Animatetext duration={1} x={50} y={0}>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">{slide.title}</h1>
                  </Animatetext>
                  <Animatetext duration={1} x={-50} y={0}>
                    <p className="mt-4 text-lg md:text-xl text-gray-200">{slide.desc}</p>
                  </Animatetext>
                  <div className="mt-6">
                    <Button size="lg" className="rounded-full">
                      Get Started
                    </Button>
                  </div>
                </div>
                <div>
                  <Animatetext duration={1} y={50}>
                    <Image src={slide?.productImage} alt="Hero" width={500} height={500} />
                  </Animatetext>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-6" />
      <CarouselNext className="right-6" />
    </Carousel>
  );
}
