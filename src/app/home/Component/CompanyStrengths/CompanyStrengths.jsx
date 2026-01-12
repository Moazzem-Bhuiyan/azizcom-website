'use client';

import Animatetext from '@/Component/shared/AnimatedText/AnimatedText';
import { motion } from 'framer-motion';
import { Award, Briefcase, Users, Lightbulb, Shield, Target } from 'lucide-react';

const timelineItems = [
  {
    id: 1,
    title: 'Legacy & Reputation',
    description:
      "Established in the early 1970s, Azizco is one of Bangladesh's most trusted electro-mechanical and trading firms, known for its long-standing credibility and customer satisfaction.",
    icon: <Award className="w-6 h-6" />,
    side: 'left',
  },
  {
    id: 2,
    title: 'Diversified Business Portfolio',
    description:
      'The company operates in various high-growth sectors, including elevators, HVAC systems, construction materials, and oil and gas, ensuring stability and risk reduction.',
    icon: <Briefcase className="w-6 h-6" />,
    side: 'right',
  },
  {
    id: 3,
    title: 'Customer-Centric Solutions',
    description:
      'Azizco focuses on delivering customized solutions with strong after-sales and technical support for lasting client relationships.',
    icon: <Target className="w-6 h-6" />,
    side: 'left',
  },
  {
    id: 4,
    title: 'Specialized Organizational Structure',
    description:
      'The divisional setup enhances efficiency and accountability by allowing each business unit to focus on specific market segments.',
    icon: <Briefcase className="w-6 h-6" />,
    side: 'right',
  },
  {
    id: 5,
    title: 'Skilled Workforce',
    description:
      'With over 400 professionals, including engineers and technicians, Azizco ensures excellence in execution.',
    icon: <Users className="w-6 h-6" />,
    side: 'left',
  },
  {
    id: 6,
    title: 'Innovation & Growth',
    description:
      'The company emphasizes innovative technologies and seeks sustainable growth opportunities.',
    icon: <Lightbulb className="w-6 h-6" />,
    side: 'right',
  },
  {
    id: 7,
    title: 'Ethical Operations',
    description:
      'Azizco upholds integrity and responsibility, consistently adhering to quality and safety standards in all operations.',
    icon: <Shield className="w-6 h-6" />,
    side: 'left',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: (side) => (side === 'left' ? -60 : 60) },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: '',
      stiffness: 300,
      damping: 25,
    },
  },
  hover: {
    scale: 1.4,
    boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)',
    transition: {
      type: '',
      stiffness: 350,
    },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
    },
  },
};

export function CompanyStrengths() {
  return (
    <section className="w-full py-20 px-4  bg-linear-to-b from-white to-blue-50">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Title Section */}
        <div className="text-center mb-16 space-y-2">
          <Animatetext duration={1} x={0} y={20}>
            <h2 className="text-5xl font-bold bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              Company Strengths: (Azizco)
            </h2>
          </Animatetext>
          <Animatetext duration={1} x={0} y={-20}>
            <p className="text-lg text-gray-600 max-w-6xl mx-auto leading-relaxed">
              Azizco Combines Decades Of Industry Expertise With Trusted Global Partnerships To
              Deliver Reliable, High-Quality Electro-Mechanical Solutions. Strong Technical
              Capability, Proven Project Execution, And Long-Term Client Relationships Define Our
              Competitive Edge.
            </p>
          </Animatetext>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                custom={item.side}
                className={`flex items-center gap-8 ${
                  item.side === 'left' ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <motion.div
                  className={`flex-1 rounded-lg ${
                    item.side === 'left' ? 'text-right pr-8' : 'text-left pl-8'
                  }`}
                  whileHover={{
                    scale: 1,
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)',
                    transition: {
                      type: '',
                      stiffness: 350,
                    },
                  }}
                  transition={{ type: '', stiffness: 300 }}
                >
                  <motion.div
                    className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-2xl transition-shadow"
                    whileHover={{ y: -8 }}
                    transition={{ type: '', stiffness: 300 }}
                  >
                    <motion.h3
                      className="text-xl font-bold text-gray-800 mb-2"
                      whileHover={{ color: '#3b82f6' }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      variants={descriptionVariants}
                      className="text-gray-600 text-sm leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div
                  variants={dotVariants}
                  whileHover="hover"
                  className="relative z-10 flex-shrink-0 bg-transparent rounded-full"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full shadow-lg border-4 border-white">
                    <motion.div className="text-white bg-transparent">{item.icon}</motion.div>
                  </div>
                  {/* Pulse Effect */}
                  <>
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-blue-500"
                      animate={{
                        scale: [1, 1.5],
                        opacity: [0.6, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeOut',
                      }}
                    />

                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-blue-500"
                      animate={{
                        scale: [1, 1.5],
                        opacity: [0.6, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeOut',
                        delay: 3,
                      }}
                    />
                  </>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
