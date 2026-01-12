'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

// YORK Steam and Hot Water Chiller product data
const chillers = [
  {
    id: 'yhau-c-single-effect',
    name: 'YHAU-C Single Effect Steam Chiller',
    description:
      'Units suitable for lower steam pressures found in commercial and process cooling applications.',
    specs: [
      'Two-step evaporator and absorber design',
      'Steam (condensate) drain cooler',
      'Water is the refrigerant',
    ],
    imageQuery: '/absorption/yhau-c-single-effect.png',
  },
  {
    id: 'yhau-cg-direct-fired',
    name: 'YHAU-CG Direct Fired Chiller',
    description:
      'Units driven by natural gas or light oil energy sources for commercial cooling and industrial process applications.',
    specs: [
      'Two-step evaporator and absorber design',
      'Parallel flow cycle',
      'Water is the refrigerant',
    ],
    imageQuery: '/absorption/yhau-cg-direct-fired.png',
  },
  {
    id: 'yhau-cw-double-effect',
    name: 'YHAU-CW Double Effect Steam Chiller',
    description:
      'Units typically driven by a variety of steam pressures found in co-generation systems.',
    specs: [
      'Two-step evaporator and absorber design',
      'Parallel flow cycle',
      'Water is the refrigerant',
    ],
    imageQuery: '/absorption/yhau-cw-double-effect.png',
  },
  {
    id: 'yhau-cxr-direct-fired',
    name: 'YHAU-CXR Direct Fired Chiller/Heater',
    description: 'Combines a space-saving design with indoor/outdoor installation flexibility.',
    specs: [
      'Burner combustion technology enhances system efficiency',
      'Space-saving design',
      'Proven controls based on PLC',
    ],
    imageQuery: '/absorption/yhau-cxr-direct-fired.png',
  },
  {
    id: 'yhau-clch-hot-water',
    name: 'YHAU-CL/CH Hot Water Chiller',
    description: 'Units typically driven by hot water as low as 158F (70C).',
    specs: [
      'Two-step evaporator and absorber design',
      'Flexible operating envelope',
      'Water is the refrigerant',
    ],
    imageQuery: '/absorption/yhau-clch-hot-water.png',
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

export function SteamAndHotWaterChillers() {
  return (
    <section className="py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Chiller Section */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
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
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300"
                  >
                    {chiller.name}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-sm text-gray-300 leading-relaxed"
                  >
                    {chiller.description}
                  </motion.p>

                  <motion.div
                    className="space-y-2.5 pt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                  >
                    {chiller.specs.map((spec, idx) => (
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
