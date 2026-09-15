'use client';
import Animatetext from '@/Component/shared/AnimatedText/AnimatedText';
import { motion } from 'framer-motion';
import { useState } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative py-28 bg-gray-50 overflow-hidden">
      {/* background glow */}
      <div className="absolute -top-40 right-0 h-96 w-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-0 h-96 w-96 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <Animatetext duration={1} y={20}>
            <h4 className="text-blue-600 font-semibold uppercase tracking-wide text-xl">
              Market We Serve
            </h4>
          </Animatetext>

          <Animatetext duration={1} x={-20}>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              Industries We Have Served
              <br className="hidden md:block" /> Over the Last 10 Years
            </h2>
          </Animatetext>

          <Animatetext duration={1} y={-20}>
            <p className="mt-6 text-lg text-gray-600">
              Delivering electro-mechanical excellence across Bangladesh’s most critical industries.
            </p>
          </Animatetext>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mt-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {markets.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.9 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover="hover"
                initial="rest"
                animate="rest"
                transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                className="group relative cursor-pointer rounded-3xl p-[1px] bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-purple-500/30"
              >
                {/* Animated gradient border */}
                <motion.div
                  variants={{
                    rest: { opacity: 0.4 },
                    hover: { opacity: 1 },
                  }}
                  className="absolute inset-0 rounded-3xl blur-lg bg-linear-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/40"
                />

                {/* Card body */}
                <motion.div
                  variants={{
                    rest: { y: 0 },
                    hover: { y: -10 },
                  }}
                  className="relative z-10 h-full rounded-3xl bg-white/80 backdrop-blur-xl p-8 border border-white/60 shadow-lg"
                >
                  {/* Glow orb */}
                  <div className="absolute -top-10 -right-10 h-32 w-32 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <motion.div
                    variants={{
                      rest: { rotate: 0, y: 0 },
                      hover: { rotate: 8, y: -4 },
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 shadow-lg"
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mt-6 text-lg font-semibold text-gray-900">{item.title}</h3>

                  {/* Fancy divider */}
                  <motion.div
                    variants={{
                      rest: { width: 32, opacity: 0.6 },
                      hover: { width: 80, opacity: 1 },
                    }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 h-[3px] rounded-full bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600"
                  />

                  {/* Subtle shine */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
