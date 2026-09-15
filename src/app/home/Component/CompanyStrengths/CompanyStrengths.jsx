'use client';

import Animatetext from '@/Component/shared/AnimatedText/AnimatedText';
import { motion } from 'framer-motion';
import { Award, Briefcase, Users, Lightbulb, Shield, Target } from 'lucide-react';

const strengths = [
  {
    title: 'Legacy & Reputation',
    description:
      "Established in the early 1970s, Azizco is one of Bangladesh's most trusted electro-mechanical firms.",
    icon: Award,
  },
  {
    title: 'Diversified Portfolio',
    description: 'Operating across elevators, HVAC, construction materials, and oil & gas sectors.',
    icon: Briefcase,
  },
  {
    title: 'Customer-Centric Approach',
    description: 'Tailored solutions with strong after-sales and long-term technical support.',
    icon: Target,
  },
  {
    title: 'Specialized Structure',
    description: 'Divisional organization ensures accountability and operational efficiency.',
    icon: Briefcase,
  },
  {
    title: 'Skilled Workforce',
    description: '400+ engineers and technicians delivering excellence across projects.',
    icon: Users,
  },
  {
    title: 'Innovation & Growth',
    description: 'Focused on modern technologies and sustainable business expansion.',
    icon: Lightbulb,
  },
  {
    title: 'Ethical Operations',
    description: 'Integrity, compliance, quality, and safety remain core values.',
    icon: Shield,
  },
];

export function CompanyStrengths() {
  return (
    <section className="relative overflow-hidden py-24 px-4 bg-linear-to-br from-slate-50 via-blue-50 to-white">
      {/* Floating Gradient Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-20">
          <Animatetext duration={1} y={30}>
            <h2 className="text-5xl font-bold bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Why Azizco Stands Strong
            </h2>
          </Animatetext>
          <Animatetext duration={1} y={-20}>
            <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-relaxed">
              Decades of engineering excellence combined with innovation, integrity, and trusted
              global partnerships.
            </p>
          </Animatetext>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {strengths.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{
                  y: -10,
                  rotateX: 4,
                  rotateY: -4,
                }}
                className="relative group"
              >
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 blur transition duration-500" />

                {/* Glass Card */}
                <div className="relative h-full rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 p-8 shadow-xl">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="text-white w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
