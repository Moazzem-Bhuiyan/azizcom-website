import React from 'react';
import { ContactSection } from './_Component/ContactUsSection';
import HeroSection from '@/Component/shared/ReusableHero/ReusableHero';
export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Azizco for inquiries, support, or collaboration opportunities. We are here to assist you with your HVAC needs and provide expert solutions tailored to your requirements.',
};

export default function page() {
  return (
    <div>
      <HeroSection
        title="Contact Us"
        subtitle="Contact Us for inquiries, support, or collaboration opportunities. We are here to assist you with your HVAC needs and provide expert solutions tailored to your requirements."
        bgImage="/subhero/contactus.png"
      />
      <ContactSection />{' '}
      <div className="w-full h-100 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        />
      </div>
    </div>
  );
}
