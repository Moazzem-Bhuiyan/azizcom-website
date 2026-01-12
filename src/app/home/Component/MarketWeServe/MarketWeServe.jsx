'use client';
import Animatetext from '@/Component/shared/AnimatedText/AnimatedText';
import { motion } from 'framer-motion';
import {
  Building2,
  Hospital,
  GraduationCap,
  Plane,
  Factory,
  ShoppingBag,
  Landmark,
  Banknote,
  Shirt,
  Trophy,
} from 'lucide-react';

const markets = [
  { title: 'Commercial Buildings', icon: Building2 },
  { title: 'Hospitals', icon: Hospital },
  { title: 'Pharmaceuticals', icon: Factory },
  { title: 'Shopping Malls', icon: ShoppingBag },
  { title: 'Universities', icon: GraduationCap },
  { title: 'Airports', icon: Plane },
  { title: 'Spinning Mills', icon: Factory },
  { title: 'Textile Industries', icon: Shirt },
  { title: 'Garments & Knitwear', icon: Shirt },
  { title: 'Banks', icon: Banknote },
  { title: 'Sports Complexes', icon: Trophy },
  { title: 'Infrastructure Projects', icon: Landmark },
];

export default function MarketWeServe() {
  return (
    <section className="relative py-28 bg-gray-50 overflow-hidden">
      {/* background accents */}
      <div className="absolute -top-40 right-0 h-96 w-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-0 h-96 w-96 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-7xl mx-auto"
        >
          <Animatetext duration={1} x={0} y={20}>
            {' '}
            <h4 className="text-blue-600 font-semibold uppercase tracking-wide text-xl">
              Market We Serve
            </h4>
          </Animatetext>
          <Animatetext duration={1} x={-20} y={0}>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              Industries We Have Served <br className="hidden md:block" />
              Over the Last 10 Years
            </h2>
          </Animatetext>
          <Animatetext duration={1} x={0} y={-20}>
            <p className="mt-6 text-lg text-gray-600">
              Azizco serves government, commercial, industrial, infrastructure, and large
              residential projects across Bangladesh, delivering reliable electro-mechanical
              solutions with proven expertise.
            </p>
          </Animatetext>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="mt-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {markets.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 18,
                }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 border border-gray-100 shadow-md hover:shadow-2xl"
              >
                {/* Gradient Glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/40 via-transparent to-indigo-500/10" />
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.08 }}
                  transition={{ type: '', stiffness: 300, damping: 15 }}
                  className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10 group-hover:bg-blue-600 transition-colors duration-300"
                >
                  <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </motion.div>

                {/* Title */}
                <h3 className="relative z-10 mt-6 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Bottom Accent Line */}
                <div className="relative z-10 mt-4 h-[2px] w-10 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
