'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

// YORK Water-Cooled Chiller product data
const chillers = [
  {
    id: 'yz-magnetic-bearing',
    name: 'YZ Magnetic Bearing Centrifugal Chiller',
    description:
      'A revolutionary advancement challenging everything about conventional chiller design.',
    specs: [
      '150–2,020 tons cooling capacity',
      'Fully optimized for ultimate performance with a next-generation low-GWP refrigerant',
    ],
    imageQuery: '/watercooledChiller/yz-magnetic-bearing.png',
  },
  {
    id: 'yk-centrifugal',
    name: 'YK Centrifugal Chiller',
    description: 'Engineered to deliver real-world performance while offering exclusive benefits.',
    specs: [
      '250–3,000 tons cooling capacity',
      'Annual energy savings up to 30 percent',
      'Heat recovery option available',
    ],
    imageQuery: '/watercooledChiller/yk-centrifugal.png',
  },
  {
    id: 'ymc2-magnetic-drive',
    name: 'YMC2 Centrifugal Magnetic Drive Chiller',
    description:
      'State-of-the-art design and active magnetic-bearing technology for an advanced solution.',
    specs: [
      '165-1,000 tons cooling capacity',
      'As low as 0.175 kW/ton at full load, below 0.1 kW/ton at part load',
      'Achieve sound levels as low as 70 dBA',
    ],
    imageQuery: '/watercooledChiller/ymc2-magnetic-drive.png',
  },
  {
    id: 'yvwa-variable-speed',
    name: 'YVWA Variable Speed Screw Chiller',
    description:
      'Strike the right balance between capital cost, ownership cost, and energy efficiency.',
    specs: [
      '125-300 tons cooling capacity',
      'Tailor and tune configurations',
      'Handles high pressures associated with ice thermal storage',
    ],
    imageQuery: '/watercooledChiller/yvwa-variable-speed.png',
  },
  {
    id: 'ycwl-scroll',
    name: 'YCWL Scroll Chiller',
    description: 'Delivers superior performance while staying environmentally friendly.',
    specs: [
      '50-200 tons cooling capacity',
      "Designed to fit through a standard 3' door",
      'Lowest MCAs in the industry',
    ],
    imageQuery: '/watercooledChiller/ycwl-scroll.png',
  },
  {
    id: 'yd-dual-centrifugal',
    name: 'YD Dual Centrifugal Chiller',
    description:
      'Two compressors operating in parallel and features the most compact configuration in its class.',
    specs: [
      '1,500-6,000 tons cooling capacity',
      'Advanced controls for reliable operation',
      'Most compact configuration in its class',
    ],
    imageQuery: '/watercooledChiller/yd-dual-centrifugal.png',
  },
  {
    id: 'yk-ep-economizer',
    name: 'YK-EP Centrifugal Chiller with Economizer',
    description:
      'Our patented technology delivers the quietest centrifugal chiller products on the market.',
    specs: ['2,500-3,500 tons cooling capacity', 'Utilizes an economized cycle'],
    imageQuery: '/watercooledChiller/yk-ep-economizer.png',
  },
  {
    id: 'yst-steam-turbine',
    name: 'YST Steam Turbine Centrifugal Chiller',
    description: 'The perfect choice for large combined-heating-and-power (CHP) plants.',
    specs: [
      '700-2,800 tons cooling capacity',
      'Offers high pressure steam as an alternative energy source',
    ],
    imageQuery: '/watercooledChiller/yst-steam-turbine.png',
  },
  {
    id: 'cyk-compound',
    name: 'CYK Compound Centrifugal Chiller',
    description:
      'Designed specifically for high-head conditions and to handle applications with unique differential pressure.',
    specs: [
      '300-2,500 tons cooling capacity',
      'Compressors can be adapted to match various application requirements',
    ],
    imageQuery: '/watercooledChiller/cyk-compound.png',
  },
  {
    id: 'om-custom-design',
    name: 'OM Custom Design Centrifugal Chiller',
    description: 'High-performing chiller best-suited for large-scale cooling projects.',
    specs: [
      '3,000-5,500 tons cooling capacity',
      'Exceptional design flexibility',
      'Meets the most demanding prerequisites',
    ],
    imageQuery: '/watercooledChiller/om-custom-design.png',
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

export function YORKChillers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
        >
          {chillers.map((chiller) => (
            <motion.div
              key={chiller.id}
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
                  viewport={{ once: false }}
                >
                  <motion.img
                    src={chiller.imageQuery}
                    alt={chiller.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 bg-white"
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
                    viewport={{ once: false }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                  >
                    <span className="inline-block px-4 py-2 text-xs font-bold text-white bg-linear-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/80 transition-all duration-300">
                      Smart Ready
                    </span>
                  </motion.div>

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
