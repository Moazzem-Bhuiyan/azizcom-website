'use client';
import Animatetext from '@/Component/shared/AnimatedText/AnimatedText';
import { motion } from 'framer-motion';

const projects = [
  { name: 'SKF-HORMONE BIOLOGICAL', capacity: '600 TR (YK) AND COOLING' },
  { name: 'INCEPTA VACCINE LTD.', capacity: '75 TR (YL) COOLING' },
  { name: 'BANGABANDHU SATELLITE LAUNCHING', capacity: '600 TR' },
  { name: 'MRT LINE - 06 (FIRST METRO RAIL IN BANGLADESH)', capacity: '1370 TR' },
  // later: more projects can be added here
];

export default function SuccessfulProjects() {
  return (
    <section className="py-28 bg-gray-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div className="text-center max-w-3xl mx-auto">
          <Animatetext duration={1} x={0} y={20}>
            {' '}
            <h4 className="text-blue-600 font-semibold uppercase tracking-wide">
              Our Successful Projects
            </h4>
          </Animatetext>
          <Animatetext duration={1} x={20} y={0}>
            {' '}
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              Projects Delivered with Excellence
            </h2>
          </Animatetext>
          <Animatetext duration={1} x={-20} y={0}>
            {' '}
            <p className="mt-6 text-gray-600 text-lg">
              Over the years, we have executed numerous projects across various industries,
              showcasing our expertise in cooling and electro-mechanical solutions.
            </p>
          </Animatetext>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mt-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className="group relative bg-white p-5 rounded-2xl shadow-md border border-gray-100 overflow-hidden cursor-pointer"
            >
              {/* Subtle gradient hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              {/* Project Name */}
              <h3 className="text-base md:text-lg font-semibold text-gray-900">{project.name}</h3>

              {/* Capacity */}
              <p className="mt-1 text-sm text-gray-600">{project.capacity}</p>

              {/* Bottom Accent */}
              <div className="mt-3 h-[2px] w-10 bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
