'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, ArrowRight, CheckCircle } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['House-16, Road-1, Block B', 'Niketon, Gulshan-1', 'Dhaka 1212'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@azizco.com'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['222286590', '58815043'],
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitted(true);
    setIsLoading(false);

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative py-20 px-4 md:px-8 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="group cursor-pointer"
                >
                  <div className="flex gap-4 items-start">
                    <motion.div whileHover={{ rotate: 12, scale: 1.1 }} className="shrink-0">
                      <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-red-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-shadow duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <motion.p
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="text-gray-400 group-hover:text-gray-200 transition-colors"
                          >
                            {detail}
                          </motion.p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-red-500/10 rounded-2xl blur-xl"></div>

            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative bg-slate-800/50 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-colors"
              animate={submitted ? { scale: [1, 1.02, 1] } : {}}
              transition={{ duration: 0.6 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex flex-col items-center justify-center py-12 gap-4"
                >
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                    <CheckCircle className="w-16 h-16 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white text-center">Message Sent!</h3>
                  <p className="text-gray-400 text-center">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-slate-700/50 border border-slate-600 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-lg"
                        required
                      />
                    </motion.div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-slate-700/50 border border-slate-600 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-lg"
                        required
                      />
                    </motion.div>
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="w-full bg-slate-700/50 border border-slate-600 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-lg resize-none"
                        required
                      />
                    </motion.div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={isLoading}
                      type="submit"
                      className="w-full bg-linear-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                      <motion.div
                        animate={isLoading ? { rotate: 360 } : {}}
                        transition={{
                          duration: 1,
                          repeat: isLoading ? Number.POSITIVE_INFINITY : 0,
                        }}
                      >
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </div>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
