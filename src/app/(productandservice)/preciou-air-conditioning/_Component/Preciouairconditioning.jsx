'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

// Chiller and Fluid Cooler product data
const chillersAndCoolers = [
  {
    id: 'ycul-scroll-compressor',
    name: 'YCUL – Scroll Compressor Chiller',
    description: 'Scroll compressor with refrigerant HFC-410A for efficient cooling applications.',
    specs: [
      '40 - 80 TR | 140 - 280 kW',
      'Refrigerant: HFC-410A',
      'BAS communications',
      'Service isolation valves',
      'High-ambient kit to 125°F',
    ],
    availableOptions: ['Hot-gas bypass', 'Low-ambient kit to 0°F'],
    imageQuery: '/preciou/ycul-scroll-compressor.png',
  },
  {
    id: 'ylua-scroll-compressor',
    name: 'YLUA – Scroll Compressor Chiller',
    description:
      'Conventional tube-and-fin coils and BAS communications for precise temperature control.',
    specs: [
      '80 - 160 TR | 280 - 560 kW',
      'Refrigerant: HFC-410A',
      'Conventional tube-and-fin coils',
      'BAS communications',
      'High-ambient kit to 125°F',
    ],
    availableOptions: ['Hot-gas bypass', 'Low-ambient kit to 0°F', 'Dual-point power'],
    imageQuery: '/preciou/ylua-scroll-compressor.png',
  },
  {
    id: 'vdc-remote-air-cooled',
    name: 'VDC – Remote Air Cooled Condenser',
    description:
      'Remote air cooled condenser, suitable for matching with chillers or refrigeration systems.',
    specs: [
      '175 - 2280 MBH',
      'Refrigerant: HFC-410A',
      'Remote air cooled condenser',
      'Panel includes disconnect switch and motor protection',
      'Flexible configuration from 1 to 12 fans',
    ],
    availableOptions: [
      'Low-sound fans',
      'Manifold kit',
      'Fan cycling by refrigerant pressure or ambient temperature',
      'VFD-ready motors',
      'Coil fin options',
      'Painted unit casing',
      'Multiple coil circuits per unit',
    ],
    imageQuery: '/preciou/vdc-remote-air-cooled.png',
  },
  {
    id: 'vdcf-fluid-cooler',
    name: 'VDCF – Fluid Cooler',
    description:
      'Fluid cooler for a range of liquids, suitable for free-cooling applications and industrial-fluid cooling.',
    specs: [
      '65 - 2890 MBH',
      'Fluid: Water, glycol',
      'Fluid cooler for use with range of liquids',
      'Closed-loop alternative to cooling towers reduces water maintenance',
    ],
    availableOptions: [
      'Low-sound fans',
      'Manifold kit',
      'Fan cycling by liquid temperature',
      'VFD-ready motors',
      'Coil-fin options',
      'Painted unit casing',
    ],
    imageQuery: '/preciou/vdcf-fluid-cooler.png',
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
      type: 'spring',
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

export function ChillerAndCoolerProducts() {
  return (
    <section className="py-20 bg-linear-to-b from-pink-50 via-white to-orange-50 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Chiller and Cooler Section */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {chillersAndCoolers.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover="hover"
              className="h-full group hover:scale-105 transition-transform duration-500"
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
                >
                  <motion.img
                    src={product.imageQuery}
                    alt={product.name}
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
                    {product.name}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-sm text-gray-300 leading-relaxed"
                  >
                    {product.description}
                  </motion.p>

                  <motion.div
                    className="space-y-2.5 pt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                  >
                    {product.specs.map((spec, idx) => (
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
                          transition={{ type: '', stiffness: 400 }}
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
