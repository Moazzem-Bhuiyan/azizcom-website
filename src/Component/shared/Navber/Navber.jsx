'use client';

import Link from 'next/link';
import { Search, MapPin, Facebook, Linkedin, Youtube, ChevronDown, Zap } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import logo from '@/assest/logo.png';
import logo1 from '@/assest/logofirst.png';
import logo2 from '@/assest/logosecond.png';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const router = useRouter();

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'OUR BRANDS', href: '/brand' },
    { label: 'PROJECTS ', href: '/project' },
    { label: 'CONTACT US', href: '/contact-us' },
  ];

  const projectCategories = {
    'Virtical Transportation': ['Eleveator & Escalators', 'Parking Solutions'],
    'HVAC SOLUTIONS': [
      'Water Cooled Chiller',
      'Air Cooled Chiller',
      'Absorption Chiller',
      'Preciou Air Conditioning',
    ],
    'LOCOMOTIVE DIVISION': ['Locomotive Division'],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const linkHoverVariants = {
    hover: {
      scale: 1.05,
      color: '#dc2626',
      transition: { duration: 0.2 },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const socialIconVariants = {
    idle: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.3,
      rotate: 15,
      transition: { duration: 0.3, type: 'spring', stiffness: 400 },
    },
  };

  return (
    <nav className="w-full">
      {/* Top Header */}
      <motion.div
        className="bg-linear-to-r from-slate-50 to-gray-100 border-b border-gray-200"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2 text-sm text-gray-700"
            variants={itemVariants}
          >
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <MapPin className="w-4 h-4 text-red-600" />
            </motion.div>
            <span className="font-medium">
              House-16, Road-1, Block B, Niketon, Gulshan-1, Dhaka 1212
            </span>
          </motion.div>
          <motion.div
            className="flex items-center gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={socialIconVariants}
              initial="idle"
              whileHover="hover"
              className="cursor-pointer"
            >
              <Facebook className="w-4 h-4 text-gray-600 hover:text-blue-600 transition-colors" />
            </motion.div>
            <motion.div
              variants={socialIconVariants}
              initial="idle"
              whileHover="hover"
              className="cursor-pointer"
            >
              <Linkedin className="w-4 h-4 text-gray-600 hover:text-blue-700 transition-colors" />
            </motion.div>
            <motion.div
              variants={socialIconVariants}
              initial="idle"
              whileHover="hover"
              className="cursor-pointer"
            >
              <Youtube className="w-4 h-4 text-gray-600 hover:text-red-600 transition-colors" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.div
        className="bg-black border-b-2 border-gray-200 shadow-sm"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 py-1 ">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <motion.div
              className="flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="cursor-pointer  border-l-4  border-blue-600 pl-2 "
                onClick={() => {
                  router.push('/');
                }}
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={logo1}
                    alt="Logo"
                    width={3500}
                    height={10000}
                    className=" object-contain w-35 h-auto md:h-auto"
                  />
                  <Image
                    src={logo2}
                    alt="Logo"
                    width={3500}
                    height={10000}
                    className=" object-contain w-60  h-auto md:h-auto -ml-7 "
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Section */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="default"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6"
                  onClick={() => router.push('/contact-us')}
                >
                  JOIN US
                </Button>
              </motion.div>
              <motion.div
                className="text-gray-700 text-sm border-l border-gray-300 pl-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="font-semibold text-xs text-gray-500">Email</div>
                <div className="text-white">info@azizco.com</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold text-sm px-4 h-auto py-3">
                  <Zap className="w-4 h-4 mr-2" />
                  <div>
                    <div className="text-xs">CALL NOW</div>
                    <div className="text-xs font-bold">+58815043</div>
                  </div>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Menu */}
      <motion.div
        className="bg-linear-to-r from-slate-100 to-slate-50 border-b border-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <Link
                    href={link.href}
                    className="py-4 px-2 text-xs font-bold text-gray-800 transition-colors relative block"
                  >
                    <motion.div
                      variants={linkHoverVariants}
                      animate={hoveredLink === link.label ? 'hover' : 'initial'}
                    >
                      {link.label}
                    </motion.div>
                    <motion.div
                      className="absolute bottom-3 left-0 right-0 h-0.5 bg-red-600 origin-left"
                      initial="hidden"
                      animate={hoveredLink === link.label ? 'visible' : 'hidden'}
                      variants={underlineVariants}
                    />
                  </Link>
                </motion.div>
              ))}

              {/* Projects Dropdown with Framer Motion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <motion.button
                      className="py-4 px-2 text-xs font-bold text-gray-800 hover:text-red-600 transition-colors border-b-3 border-transparent hover:border-red-600 flex items-center gap-1 group relative"
                      onMouseEnter={() => setHoveredLink('PROJECTS')}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <motion.span
                        variants={linkHoverVariants}
                        animate={hoveredLink === 'PRODUCTS & SERVICES' ? 'hover' : 'initial'}
                      >
                        PRODUCTS & SERVICES
                      </motion.span>
                      <motion.div
                        animate={
                          hoveredLink === 'PRODUCTS & SERVICES' ? { rotate: 180 } : { rotate: 0 }
                        }
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                      <motion.div
                        className="absolute bottom-3 left-0 right-0 h-0.5 bg-red-600 origin-left"
                        initial="hidden"
                        animate={hoveredLink === 'PRODUCTS & SERVICES' ? 'visible' : 'hidden'}
                        variants={underlineVariants}
                      />
                    </motion.button>
                  </DropdownMenuTrigger>
                  <AnimatePresence>
                    <DropdownMenuContent
                      className="w-80 bg-white shadow-xl border border-gray-200"
                      asChild
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <DropdownMenuLabel className="text-blue-600 font-bold px-3 py-2">
                          Our Project Categories
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        {Object.entries(projectCategories).map(
                          ([category, projects], categoryIndex) => (
                            <motion.div
                              key={category}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + categoryIndex * 0.05 }}
                            >
                              <DropdownMenuSub>
                                <DropdownMenuSubTrigger className="flex items-center gap-2 font-semibold text-black hover:text-white text-sm hover:bg-blue-900 transition-colors">
                                  <motion.span
                                    className="w-2 h-2 bg-blue-600  rounded-full hover:text-white"
                                    whileHover={{ scale: 1.5 }}
                                    transition={{ duration: 0.2 }}
                                  />
                                  {category}
                                </DropdownMenuSubTrigger>
                                <DropdownMenuSubContent className="w-64 bg-white">
                                  {projects.map((project, projectIndex) => (
                                    <motion.div
                                      key={project}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.05 + projectIndex * 0.05 }}
                                      whileHover={{ x: 5 }}
                                    >
                                      <DropdownMenuItem className="cursor-pointer hover:bg-blue-300 hover:text-white text-gray-700 text-sm py-2">
                                        <Link
                                          href={`/${project.toLowerCase().replace(/\s+/g, '-')}`}
                                          className="w-full"
                                        >
                                          {project}
                                        </Link>
                                      </DropdownMenuItem>
                                    </motion.div>
                                  ))}
                                </DropdownMenuSubContent>
                              </DropdownMenuSub>
                            </motion.div>
                          )
                        )}
                      </motion.div>
                    </DropdownMenuContent>
                  </AnimatePresence>
                </DropdownMenu>
              </motion.div>
            </div>

            {/* Right Actions */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                className="text-gray-600 hover:text-gray-900 p-2 hover:bg-gray-200 rounded-full transition-colors"
                whileHover={{ rotate: 90, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              ></motion.button>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-2 flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    🔔
                  </motion.span>
                  AZIZ.COM
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
