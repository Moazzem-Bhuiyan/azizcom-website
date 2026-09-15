'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card'; // Assuming this is where your Card component is from

// Chiller product data
const chillers = [
  {
    id: 'yvag-scroll',
    name: 'YVAG - Full DC Inverter Air-Cooled Mini Chiller (VTF Outdoor Unit)',
    description:
      'Wider capacity ranges from 4HP to 14HP for the basis models. Full year cooling operation and better humidity balance.',
    specs: [
      'Cooling: -5℃ to 48℃, Heating: -20℃ to 43℃',
      'Capacity: 4HP to 14HP',
      'Full DC inverter technology',
      'Smoother air flow temperature',
    ],
    imageQuery: '/modular-chillers/yvag-scroll.png',
  },
  {
    id: 'yvag-hr',
    name: 'YVAG-HR - Air-Cooled Mini Chiller with Heat Recovery for Domestic Hot Water',
    description:
      'Flexible to extend to 48HP with heat recovery for domestic hot water and improved cooling efficiency.',
    specs: [
      'Cooling Capacity: 11.2/14/15.5/20/22/25/28/31kW',
      'Heating Capacity: 12.6/16.1/18/22/24/27/30/33kW',
      'Cooling: -5℃ to 48℃, Heating: -20℃ to 43℃',
      'Heat recovery for domestic hot water',
    ],
    imageQuery: '/modular-chillers/yvag-hr.png',
  },
  {
    id: 'ycae-x',
    name: 'YCAE-X - Air-Cooled Modular Chiller',
    description:
      'A reliable air-cooled modular chiller system with flexible system combinations from 1 to 32 units.',
    specs: [
      'Cooling Capacity: 65/100/130kW',
      'Heating Capacity: 66/101.5/131.9kW',
      'Reliable operation from -15℃ to 48℃',
      'COP 3.18~3.42, IPLV(C) 4.30~4.34',
    ],
    imageQuery: '/modular-chillers/ycae-x.png',
  },
  {
    id: 'ycae-xhr',
    name: 'YCAE-XHR - Air-Cooled Modular Chiller with Heat Recovery for Sanitary Hot Water',
    description:
      'Provides both cooling and sanitary hot water with high COP for energy efficiency.',
    specs: [
      'COP 5.28 (065) / 7.66 (130)',
      'Reliable cooling and heat recovery operation from -15℃ to 48℃',
      'Simultaneous air-conditioning and hot water production',
    ],
    imageQuery: '/modular-chillers/ycae-xhr.png',
  },
  {
    id: 'ymaa',
    name: 'YMAA - DC Inverter Air-Cooled Modular Chiller (Cooling Only)',
    description:
      'Flexible modular chiller system that combines YCAE-X, YCAE-XHR, and/or YCAE-XHR for integrated cooling.',
    specs: [
      'Cooling Capacity: 45/60/78/99/122/159/188/222/255kW',
      'Reliable full year cooling operation from -17.8℃ to 48℃',
    ],
    imageQuery: '/modular-chillers/ymaa.png',
  },
  {
    id: 'ymae-x',
    name: 'YMAE-X - Full DC Inverter Air-Cooled Modular Chiller',
    description:
      'Offers modular combinations from 1 to 32 modules in one chiller system with wider cooling capacity ranges.',
    specs: [
      'Cooling Capacity: 45/65kW, Heating: 46/66kW',
      'Cooling: -15℃ to 48℃, Heating: -25℃ to 43℃',
      'Full year cooling operation with improved air flow',
    ],
    imageQuery: '/modular-chillers/ymae-x.png',
  },
  {
    id: 'ympa',
    name: 'YMPA - Full DC Inverter Air-Cooled Modular Chiller (Commercial VTF Outdoor Unit)',
    description:
      'Commercial-grade air-cooled chiller with full DC inverter technology and improved humidity balance.',
    specs: [
      'Cooling Capacity: 45/65kW, Heating: 46/66kW',
      'System capacity up to 2080kW by modular combination',
      'Cooling: -15℃ to 48℃, Heating: -25℃ to 43℃',
    ],
    imageQuery: '/modular-chillers/ympa.png',
  },
  {
    id: 'ymae-q',
    name: 'YMAE-Q - Air-Cooled Modular Chiller (Air-to-Water Heat Pump)',
    description:
      'Provides both chilled and hot water with highly efficient DC inverter technology.',
    specs: [
      'Cooling Capacity: 130kW, Heating Capacity: 132kW',
      'Modular combination from 1 to 16 modules',
      '±0.5℃ temperature control for both chilled and hot water',
    ],
    imageQuery: '/modular-chillers/ymae-q.png',
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
    transition: {},
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

export default function ChillersProductDisplay() {
  return (
    <section className="py-20 bg-linear-to-r overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Product Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {chillers.map((product) => (
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
                    src={product?.imageQuery}
                    alt={product.name}
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
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
