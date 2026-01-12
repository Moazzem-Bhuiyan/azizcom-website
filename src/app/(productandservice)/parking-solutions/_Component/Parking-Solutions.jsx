'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const products = [
  {
    id: 'hydro-park-1127',
    name: 'Hydro-Park 1127',
    category: 'Hydraulic Lifts',
    description: 'Heavy-duty lift system designed for SUVs and commercial use.',
    specs: [
      '2700 kg capacity for all SUVs',
      'Commercial-grade design',
      'Dynamic mechanical locks for anti-falling safety',
      'Anti-slip corrugated deck',
      'Dual hydraulic cylinder for smooth operation',
      'Chromed piston pole to prevent corrosion',
      'Self-standing and self-support structure',
      'Electric key switch for safety',
      'Hydraulic overload protection',
    ],
    imageQuery: '/car/hydro-park-1127.png',
  },
  {
    id: 'hydro-park-1123',
    name: 'Hydro-Park 1123',
    category: 'Hydraulic Lifts',
    description: 'Ideal for all SUVs with advanced safety features.',
    specs: [
      '2300 kg capacity for SUVs',
      'Galvanized corrugated locks for anti-falling',
      'Anti-slip corrugated deck',
      'Single hydraulic cylinder for smooth operation',
      'Chromed piston pole',
      'Hydraulic overload protection',
    ],
    imageQuery: '/car/hydro-park-1123.png',
  },
  {
    id: 'hydro-park-2236',
    name: 'Hydro-Park 2236',
    category: 'Hydraulic Lifts',
    description: 'Hydraulic lift with 3000 kg capacity for large SUVs.',
    specs: [
      '3000 kg capacity for all SUVs',
      '2150mm usable platform',
      'Anti-slip corrugated deck',
      'Hydraulic cylinder with chain drive',
      'Hydraulic overload protection',
    ],
    imageQuery: '/car/hydro-park-2236.png',
  },
  {
    id: 'hydro-park-3230',
    name: 'Hydro-Park 3230',
    category: 'Hydraulic Lifts',
    description: 'Commercial grade design with four levels for vehicle storage.',
    specs: [
      '3000 kg capacity for both SUV and Sedan',
      'Four levels maximum',
      'Self-standing structure',
      'Hydraulic overload protection',
    ],
    imageQuery: '/car/hydro-park-3230.png',
  },
  {
    id: 'tptp-2',
    name: 'TPTP-2',
    category: 'Hydraulic Lifts',
    description: 'Low-height hydraulic lift for sedans with compact design.',
    specs: [
      '2000 kg capacity for sedan',
      'Galvanized platform with wave plate',
      '10-degree tilting platform',
      'Dual hydraulic power pack',
      'Hydraulic overload protection',
    ],
    imageQuery: '/car/tptp-2.png',
  },
  {
    id: 'bdp',
    name: 'BDP',
    category: 'Hydraulic Lifts',
    description: 'Heavy-duty lift with fast speed and multi-level adjustment.',
    specs: [
      '2000 kg capacity for sedan, 2500 kg for SUV',
      '15 levels for sedan, 5 levels for SUV',
      'Hydraulic cylinder with steel rope drive',
      'Fast lifting and descending speed',
      'Hydraulic overload protection',
    ],
    imageQuery: '/car/bdp.png',
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

export function HydraulicLiftProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {products.map((product) => (
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
                  viewport={{ once: true }}
                >
                  <motion.img
                    src={product?.imageQuery}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    variants={imageVariants}
                  />
                  <motion.div
                    className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <div className="p-6 space-y-4 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                  >
                    <span className="inline-block px-4 py-2 text-xs font-bold text-white bg-linear-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/80 transition-all duration-300">
                      {product.category}
                    </span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300"
                  >
                    {product.name}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-sm text-gray-300 leading-relaxed"
                  >
                    {product.description}
                  </motion.p>

                  <motion.div
                    className="space-y-2.5 pt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                  >
                    {product.specs.map((spec, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
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
