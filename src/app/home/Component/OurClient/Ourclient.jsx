'use client';
import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Demo client logos
const clients = [
  {
    name: 'Schindler',
    logo: '/client/image.png',
  },
  {
    name: 'Google',
    logo: '/client/image copy.png',
  },
  {
    name: 'Microsoft',
    logo: '/client/image copy 5.png',
  },
  {
    name: 'Apple',
    logo: '/client/image copy 4.png',
  },
  {
    name: 'Amazon',
    logo: '/client/image copy 3.png',
  },
  {
    logo: '/client/image copy 2.png',
  },
];

export default function ClientsCarousel() {
  return (
    <section className="py-20 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h4 className="text-white font-semibold uppercase tracking-wide">Our Clients</h4>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white">
          Trusted by Leading Brands
        </h2>

        {/* Carousel */}
        <Carousel className="mt-12">
          <CarouselContent className="flex space-x-6">
            {clients.concat(clients).map((client, index) => (
              <CarouselItem key={index} className="flex-none w-1/4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                  className="p-6 flex items-center justify-center cursor-pointer"
                >
                  <div className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors duration-300">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={120}
                      height={60}
                      className="object-contain w-30 h-30  hover:grayscale-0 transition duration-300"
                    />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-6 text-white" />
          <CarouselNext className="right-6 text-white" />
        </Carousel>
      </div>
    </section>
  );
}
