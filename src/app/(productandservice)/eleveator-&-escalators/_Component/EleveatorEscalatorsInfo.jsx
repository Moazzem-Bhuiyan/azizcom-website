'use client';
import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Efficient Performance',
    desc: 'High-performance elevators & escalators optimized for energy and smooth operation.',
  },
  {
    title: 'Versatile Designs',
    desc: 'Customizable solutions for residential, commercial, and public spaces.',
  },
  {
    title: 'Sustainable Solutions',
    desc: 'Eco-friendly systems minimizing energy usage and environmental impact.',
  },
];

export default function CompactElevatorSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
        >
          Elevators & Escalators for Modern Infrastructure
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg"
        >
          With decades of expertise in vertical transportation, Azizco delivers safe, efficient, and
          innovative elevator and escalator solutions for buildings of all sizes.
        </motion.p>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
