'use client';
import Animatetext from '@/Component/shared/AnimatedText/AnimatedText';
import { motion } from 'framer-motion';

export default function AboutPremium() {
  return (
    <section className="relative overflow-hidden bg-white py-28 w-full">
      {/* Soft background accents */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative max-w-[80%]! mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}

        <Animatetext>
          <div>
            <Animatetext duration={1} x={-50} y={0}>
              <h4 className="text-blue-600 font-semibold uppercase tracking-wide text-xl border-l-4 border-blue-600 pl-4">
                About Us
              </h4>
            </Animatetext>
            <Animatetext duration={1} x={50} y={0}>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                A Legacy of Engineering Excellence <br className="hidden md:block" />
                <span className="text-blue-600">Since the Early 1970s</span>
              </h2>
            </Animatetext>
            <Animatetext duration={1} x={0} y={20}>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Azizco is a leading electro-mechanical trading and contracting company in
                Bangladesh, established in the early 1970s. With nearly 50 years of experience, the
                company has grown into a diversified group known for reliability, professionalism,
                and quality service.
              </p>

              <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                Azizco works with renowned international brands such as{' '}
                <strong>Schindler, YORK, HILTI, ThyssenKrupp, GE Transportation,</strong> and{' '}
                <strong>Sinopec</strong>, strengthening its ability to deliver world-class solutions
                across complex and large-scale projects.
              </p>

              <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                Trusted by major government organizations including{' '}
                <strong>Bangladesh Bank, PWD, and CAAB</strong>, Azizco holds a strong position in
                national infrastructure development.
              </p>

              <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                Today, Azizco is a market leader in elevators and central air conditioning in
                Bangladesh, driven by a highly skilled workforce and an unwavering commitment to
                excellence.
              </p>
            </Animatetext>
          </div>
        </Animatetext>

        {/* RIGHT STATS / HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8"
        >
          {[
            { value: '50+', label: 'Years of Experience' },
            { value: 'Trusted', label: 'By Govt. Organizations' },
            { value: 'Global', label: 'Technology Partners' },
            { value: 'Leader', label: 'Elevator & HVAC Market' },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: '', stiffness: 300 }}
              className="rounded-2xl bg-gray-50 p-10 shadow-md border"
            >
              <h3 className="text-4xl font-bold text-blue-600">{item.value}</h3>
              <p className="mt-3 text-gray-700 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
