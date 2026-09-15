'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Animatetext from '@/Component/shared/AnimatedText/AnimatedText';

const brands = [
  {
    name: 'York (Johnson Controls)',
    logo: '/brand/york.png',
    desc: 'York is a historic HVAC brand (founded in 1874) specializing in heating, ventilation, air conditioning, and refrigeration systems.',
  },
  {
    name: 'Autors',
    logo: '/brand/autors.png',
    desc: 'Autors is a brand associated with automotive or mobility services, often linked to direction or vehicle-related solutions.',
  },
  {
    name: 'Sanei Elevator',
    logo: '/brand/sanie.png',
    desc: 'Shanghai Sanei Elevator Co., Ltd. integrates R&D, production, sales, installation, and maintenance of elevators and escalators.',
  },
  {
    name: 'TRAVIS',
    logo: '/brand/travis.png',
    desc: "TRAVIS offers solutions emphasizing 'The Best Technology & Service' in IT, software, and related fields.",
  },
  {
    name: 'Hydro Park',
    logo: '/brand/hydro.png',
    desc: 'Hydro Park manufactures mechanical parking lifts and automated car parking systems since 2009.',
  },
  {
    name: 'Murade',
    logo: '/brand/mutrade.png',
    desc: 'Murade may refer to a niche manufacturing, design, or technology firm, possibly regional or specialized.',
  },
  {
    name: 'INDEX Fixing Systems',
    logo: '/brand/index.png',
    desc: 'INDEX manufactures fixing and fastening systems including anchors, chemical fixings, and clamps globally.',
  },
  {
    name: 'Nullifire',
    logo: '/brand/null.png',
    desc: 'Nullifire specializes in passive fire protection, manufacturing intumescent coatings and fire-stopping solutions.',
  },
  {
    name: 'Concrete Canvas',
    logo: '/brand/canvas.png',
    desc: 'Concrete Canvas produces flexible, concrete-impregnated fabric for erosion control, ditch lining, and shelter applications.',
  },
  {
    name: 'Lumkani',
    logo: '/brand/lukani.png',
    desc: 'Lumkani develops networked heat-detection fire alarms and microinsurance to protect informal settlements.',
  },
  {
    name: 'Wabtec Corporation',
    logo: '/brand/wabtec.png',
    desc: 'Wabtec manufactures equipment, components, and digital solutions for locomotives, freight cars, and passenger transit vehicles.',
  },
];

export default function AnimatedBrands() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className=" relative overflow-hidden py-24 bg-linear-to-b from-pink-50 via-white to-orange-50">
      {/* Soft background accents */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-300 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-400/50 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6">
        <div>
          <Animatetext duration={1} x={-50} y={0}>
            <h2 className="tracking-wide text-xl border-l-4 border-blue-600 pl-4 font-semibold uppercase text-gray-900  mb-2">
              Our Brands
            </h2>
          </Animatetext>
          <Animatetext duration={1} x={0} y={-20}>
            <p className="text-center text-lg text-gray-600 mb-12"> </p>
          </Animatetext>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={60}
                className="object-contain mb-2"
              />
              <h3 className="text-center text-sm font-semibold text-gray-800">{brand.name}</h3>

              {/* Description overlay */}
              <motion.div
                className="absolute inset-0 bg-black/80 text-white p-4 flex items-center justify-center text-center text-sm opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {brand.desc}
              </motion.div>

              {/* Subtle glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-tr from-blue-400 via-indigo-400 to-purple-400 opacity-0"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
