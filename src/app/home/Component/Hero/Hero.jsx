import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Animatetext from '@/Component/shared/AnimatedText/AnimatedText';

const slides = [
  {
    title: 'The Future Runs On the YORK',
    desc: 'Renowned for its reliability and efficiency, YORK air conditioners are the preferred choice for cooling solutions worldwide.',
    image: '/hero/herobg1.png',
    productImage: '/hero/nsu.png',
  },
  {
    title: ' Commercial Heat Pumps',
    desc: 'Decarbonization through electrification Explore now YORK Johnson Controls',
    image: '/hero/herobg2.png',
    productImage: '/hero/mills.png',
  },
  {
    title: 'Water-Cooled Chillers',
    desc: 'More efficient with supreme performance Explore now YORK',
    image: '/hero/hero3.png',
    productImage: '/hero/bashundara.png',
  },
  {
    title: 'Air-Cooled Chillers',
    desc: 'Meeting the needs of today and tomorrow',
    image: '/hero/herobg4.png',
    productImage: '/hero/herobg4.png',
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
              <div className="relative z-10 flex justify-center h-full items-center px-10 md:px-20">
                <div className="max-w-full px-6 md:px-16 text-white">
                  <Animatetext duration={1} x={50} y={0}>
                    <h1 className="text-4xl md:text-7xl font-bold leading-tight text-center">
                      {slide.title}
                    </h1>
                  </Animatetext>
                  <Animatetext duration={1} x={-50} y={0}>
                    <p className="mt-4 text-lg md:text-xl text-gray-200">{slide.desc}</p>
                  </Animatetext>
                  {/* <div className="mt-6">
                    <Button size="lg" className="rounded-full">
                      Get Started
                    </Button>
                  </div> */}
                </div>
                {/* <div>
                  <Animatetext duration={1} y={50}>
                    <Image src={slide?.productImage} alt="Hero" width={500} height={500} />
                  </Animatetext>
                </div> */}
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
