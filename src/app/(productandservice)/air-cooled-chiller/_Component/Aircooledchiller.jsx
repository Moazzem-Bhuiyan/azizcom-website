'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import Animatetext from '@/Component/shared/AnimatedText/AnimatedText';

// Screw Chillers and Scroll Chillers product data
const screwChillers = [
  {
    id: 'yciv-variable-speed',
    name: 'YCIV Variable Speed Drive Screw Chiller',
    description:
      'This chiller offers superior control and efficiency, helping to drive down costs.',
    specs: ['150–400 tons', 'Quiet operation at off-design conditions', 'Lower operating costs'],
    imageQuery: '/aircool/yciv-variable-speed.png',
  },
  {
    id: 'yvaa-air-cooled',
    name: 'YVAA Air-cooled Variable Speed Drive Screw Chiller',
    description: 'Efficiency through advanced heat exchangers and smart controls.',
    specs: [
      '150–575 tons',
      'Lower energy costs as much as 50%',
      'Tailor options to meet specific requirements',
    ],
    imageQuery: '/aircool/yvaa-air-cooled.png',
  },
  {
    id: 'yvfa-free-cooling',
    name: 'YVFA Free Cooling VSD Screw Chiller',
    description: "A packaged design that's simple to operate and minimizes costs.",
    specs: [
      '115–500 tons',
      'Air-to-liquid free cooling coils',
      'Intelligent controls to optimize energy',
    ],
    imageQuery: '/aircool/yvfa-free-cooling.png',
  },
  {
    id: 'qtc4-screw',
    name: 'QTC4 Screw Chiller',
    description: 'Flexible design to meet efficiency, sound, or footprint requirements.',
    specs: [
      '150–360 tons',
      'Global design ensures efficient operation in every environment',
      'Allows for tailor and tune options for specific requirements',
    ],
    imageQuery: '/aircool/qtc4-screw.png',
  },
];

const scrollChillers = [
  {
    id: 'ycal-scroll',
    name: 'YCAL Scroll Chiller',
    description: 'A completely self-contained unit with a single-point power connection.',
    specs: [
      '15–65 tons',
      'Small footprint and easy, low-cost installation',
      'Available for quick shipment',
    ],
    imageQuery: '/aircool/ycal-scroll.png',
  },
  {
    id: 'ylaa-scroll',
    name: 'YLAA Scroll Chiller',
    description: 'A flexible chiller providing the right balance for improved performance.',
    specs: [
      '40–230 tons',
      'Flexible design is perfect for retrofits or new construction',
      'Quick ship program available',
    ],
    imageQuery: '/aircool/ylaa-scroll.png',
  },
  {
    id: 'qtc2-scroll',
    name: 'QTC2 Scroll Chiller',
    description: 'A self-contained unit with a single-point power connection.',
    specs: [
      '15–50 tons',
      'Small footprint and easy, low-cost installation',
      'Available for quick ship',
    ],
    imageQuery: '/aircool/qtc2-scroll.png',
  },
  {
    id: 'qtc3-scroll',
    name: 'QTC3 Scroll Chiller',
    description: 'A flexible design that can be tailored for your project.',
    specs: [
      '40–230 tons',
      'Perfect for retrofit or new construction',
      'Quick ship program available',
    ],
    imageQuery: '/aircool/qtc3-scroll.png',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: '',
      stiffness: 100,
      damping: 15,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1,
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.15,
    transition: {
      duration: 0.4,
    },
  },
};

export function ChillerProducts() {
  return (
    <section className="py-20 bg-linear-to-b from-pink-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <Animatetext duration={1} x={-50} y={0}>
          <h4 className="text-blue-600 font-semibold uppercase tracking-wide text-xl border-l-4 border-blue-600 pl-4 mb-10">
            Screw Chillers
          </h4>
        </Animatetext>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
        >
          {screwChillers.map((chiller) => (
            <motion.div
              key={chiller.id}
              variants={cardVariants}
              whileHover="hover"
              className="h-full group"
            >
              <Card className="overflow-hidden h-full bg-linear-to-br from-slate-800 to-slate-900 shadow-2xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-700/50 backdrop-blur-sm relative">
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 pointer-events-none"
                  transition={{ duration: 0.5 }}
                />

                <motion.div
                  className="relative h-56 bg-linear-to-br from-slate-700 to-slate-800 overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                >
                  <motion.img
                    src={chiller.imageQuery}
                    alt={chiller.name}
                    className="w-full h-full object-contain bg-white"
                    variants={imageVariants}
                  />
                  <motion.div
                    className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <div className="p-6 space-y-4 relative z-10">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300"
                  >
                    {chiller.name}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-sm text-gray-300 leading-relaxed"
                  >
                    {chiller.description}
                  </motion.p>

                  <motion.div
                    className="space-y-2.5 pt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                  >
                    {chiller.specs.map((spec, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.3 + idx * 0.05,
                          duration: 0.3,
                        }}
                        className="flex items-start gap-3 text-xs text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                      >
                        <motion.span
                          className="text-cyan-400 font-bold mt-0.5 flex-shrink-0"
                          whileHover={{ scale: 1.3, rotate: 10 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        >
                          ✓
                        </motion.span>
                        <span className="leading-snug">{spec}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Chillers Section */}

        <Animatetext duration={1} x={-50} y={0}>
          <h4 className="text-blue-600 font-semibold uppercase tracking-wide text-xl border-l-4 border-blue-600 pl-4 my-10">
            Scroll Chillers
          </h4>
        </Animatetext>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
        >
          {scrollChillers.map((chiller) => (
            <motion.div
              key={chiller.id}
              variants={cardVariants}
              whileHover="hover"
              className="h-full group"
            >
              <Card className="overflow-hidden h-full bg-linear-to-br from-slate-800 to-slate-900 shadow-2xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-700/50 backdrop-blur-sm relative">
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 pointer-events-none"
                  transition={{ duration: 0.5 }}
                />

                <motion.div
                  className="relative h-56 bg-linear-to-br from-slate-700 to-slate-800 overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                >
                  <motion.img
                    src={chiller.imageQuery}
                    alt={chiller.name}
                    className="w-full h-full object-contain bg-white"
                    variants={imageVariants}
                  />
                  <motion.div
                    className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <div className="p-6 space-y-4 relative z-10">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300"
                  >
                    {chiller.name}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-sm text-gray-300 leading-relaxed"
                  >
                    {chiller.description}
                  </motion.p>

                  <motion.div
                    className="space-y-2.5 pt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                  >
                    {chiller.specs.map((spec, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: 0.3 + idx * 0.05,
                          duration: 0.3,
                        }}
                        className="flex items-start gap-3 text-xs text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                      >
                        <motion.span
                          className="text-cyan-400 font-bold mt-0.5 shrink-0"
                          whileHover={{ scale: 1.3, rotate: 10 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        >
                          ✓
                        </motion.span>
                        <span className="leading-snug">{spec}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
