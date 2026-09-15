'use client';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Clients', value: 100 },
  { label: 'Projects', value: 200 },
  { label: 'Cool Number', value: 100 },
  { label: 'Our Projects', value: 100 },
];

export default function StatsCards() {
  return (
    <section className="py-28 relative bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-500"
          >
            {/* Animated Number */}
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              <CountUp start={0} end={item.value} duration={2.5} separator="," />
              {item.label === 'Projects' || item.label === 'Clients' ? '+' : ''}
            </h2>

            {/* Label */}
            <p className="mt-3 text-white text-lg font-medium">{item.label}</p>

            {/* Fancy underline */}
            <div className="mt-4 h-1 w-12 bg-white rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
