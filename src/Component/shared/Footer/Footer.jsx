'use client';
import { motion } from 'framer-motion';

export default function PremiumFooter() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden pt-20 pb-16">
      {/* Background abstract shapes */}
      <motion.div
        className="absolute -top-40 -left-20 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl"
        animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 -right-24 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-20 right-1/2 w-72 h-72 rounded-tl-[50%] rounded-br-[50%] bg-blue-500/10 blur-2xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Aziz & Company Limited
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-gray-300 text-lg max-w-xl mx-auto"
        >
          House-16, Road-1, Block B, Niketon, Gulshan-1, Dhaka 1212
        </motion.p>

        {/* Highlight line */}
        <motion.div
          className="mt-8 h-1 w-20 bg-indigo-500 rounded-full mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-gray-400 text-sm"
        >
          &copy; {new Date().getFullYear()} Aziz & Company Limited. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
