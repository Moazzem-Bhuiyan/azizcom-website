import React from 'react';
import AboutPremium from '../home/Component/About/Aboutus';
import ActivitiesSection from './_Component/Activitise';
import ClientPortfolio from './_Component/ClinetProfile';
export const meta = {
  title: 'About',
  description: 'About Azizco',
};
export default function page() {
  return (
    <div>
      <AboutPremium />
      <ActivitiesSection />
      <ClientPortfolio />
    </div>
  );
}
