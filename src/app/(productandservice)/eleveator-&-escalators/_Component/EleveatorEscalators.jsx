'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const products = [
  {
    id: 'at601',
    name: 'Passenger Elevator AT601',
    category: 'Standard Decoration',
    description: 'Hairline Stainless steel with vaulted white board illumination design',
    specs: [
      'Hairline Stainless steel ceiling',
      'Downlights on both sides (ATCO02)',
      'Mirror-etched stainless steel center',
      'Anti-skidding PVC floor (ATPO01)',
    ],
    imageQuery: '/elevator/AT601.png',
  },
  {
    id: 'at604',
    name: 'Passenger Elevator AT604',
    category: 'Standard Decoration',
    description: 'Premium stainless steel design with round pipe handrails',
    specs: [
      'Hairline Stainless steel ceiling',
      'Round pipe Stainless handrails (AT701)',
      'Mirror-etched center plates',
      'Anti-skidding PVC floor (ATP004)',
    ],
    imageQuery: '/elevator/AT604.png',
  },
  {
    id: 'at622',
    name: 'Passenger Elevator AT622',
    category: 'Standard Decoration',
    description: 'Modern design with integrated lighting and stainless elements',
    specs: [
      'Advanced ceiling with ATC024 lighting',
      'Flattened stainless steel handrails',
      'Auxiliary hairline plates',
      'Premium PVC floor (ATP009)',
    ],
    imageQuery: '/elevator/AT622.png',
  },
  {
    id: 'at623',
    name: 'Passenger Elevator AT623',
    category: 'Standard Decoration',
    description: 'Sophisticated stainless steel cabin with premium finishes',
    specs: [
      'Vaulted ceiling design (ATC009)',
      'Flattened stainless handrails (AT703)',
      'Mirror-etched stainless center',
      'Durable PVC flooring (ATP002)',
    ],
    imageQuery: '/elevator/AT623.png',
  },
  {
    id: 'at611',
    name: 'Premium Elevator AT611',
    category: 'Optional Decoration',
    description: 'Luxurious titanium gold mirror finish with premium features',
    specs: [
      'Titanium gold mirror stainless steel',
      'Acrylic ceiling panels (ATC026)',
      'Titanium three pipe handrails (AT707)',
      'Premium PVC flooring (ATP001)',
    ],
    imageQuery: '/elevator/AT611.png',
  },
  {
    id: 'at624',
    name: 'Rose Gold Elevator AT624',
    category: 'Standard Decoration',
    description: 'Elegant rose gold mirror stainless steel with synthetic marble',
    specs: [
      'Rose gold mirror stainless ceiling',
      'Rose gold acrylic panels (ATC022)',
      'Rose gold hairline plates',
      'Synthetic marble flooring (ATP009)',
    ],
    imageQuery: '/elevator/AT624.png',
  },
  {
    id: 'ate201',
    name: 'Hall Call Panel ATE201',
    category: 'Control Panel',
    description: 'Slim modern design with blue digital display and accessibility features',
    specs: [
      'Single blue digital display',
      'Floor indicator with arrows',
      'Two round metallic buttons',
      'Sleek metallic gray finish',
    ],
    imageQuery: '/elevator/ate201.png',
  },
  {
    id: 'control-car',
    name: 'Elevator Control Panel',
    category: 'Control System',
    description: 'Interior passenger control with digital display and floor buttons',
    specs: [
      'Digital display showing current floor',
      'Illuminated floor selection buttons',
      'Door open/close buttons',
      'Emergency call and alarm system',
    ],
    imageQuery: '/elevator/control-car.png',
  },
  {
    id: 'ceiling-atc021',
    name: 'Ceiling Design ATC021',
    category: 'Ceiling Options',
    description: 'Standard ceiling with hairline stainless and integrated lighting',
    specs: [
      'Hairline stainless steel frame',
      'Integrated downlighting system',
      'White translucent panels',
      'Professional lighting design',
    ],
    imageQuery: '/elevator/ceiling-atc021.png',
  },
  {
    id: 'floor-atp001',
    name: 'Floor Design ATP001',
    category: 'Floor Options',
    description: 'Premium marble tile with borders and sophisticated pattern',
    specs: [
      'Natural stone marble',
      'Luxury border design',
      'Polished finish',
      'Anti-skidding surface',
    ],
    imageQuery: '/elevator/floor-atp001.png',
  },
  {
    id: 'handrail-at701',
    name: 'Handrail AT701',
    category: 'Handrail Options',
    description: 'Standard polished stainless steel grab rail with safety focus',
    specs: [
      'Polished stainless steel',
      'Smooth ergonomic bar',
      'Safety certified',
      'Modern aesthetic',
    ],
    imageQuery: '/elevator/handrail-at701.png',
  },
  {
    id: 'door-atd305',
    name: 'Door Design ATD305',
    category: 'Door Options',
    description: 'Modern metallic finish with decorative etched patterns',
    specs: [
      'Etched metallic design',
      'Hairline stainless steel',
      'Decorative patterns',
      'Premium finish',
    ],
    imageQuery: '/elevator/door-atd305.png',
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

export function ElevatorProducts() {
  return (
    <section className=" relative py-20 bg-white ">
      {/* Soft background accents */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
      {/* Soft background accents */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute -bottom-12 -left-12 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
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
                  viewport={{ once: false }}
                >
                  <motion.img
                    src={product?.imageQuery}
                    alt={product?.name}
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
                          transition={{ type: '', stiffness: 400 }}
                        >
                          ✓
                        </motion.span>
                        <span className="leading-snug">{spec}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="pt-4 mt-4 border-t border-slate-700/50"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  />

                  <motion.div
                    className="flex flex-wrap gap-2 pt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45, duration: 0.4 }}
                  >
                    {product.specs.slice(0, 2).map((spec, idx) => (
                      <motion.span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-lg group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300"
                        whileHover={{ scale: 1.08 }}
                      >
                        {spec.split(' ').slice(0, 2).join(' ')}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                <motion.div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
