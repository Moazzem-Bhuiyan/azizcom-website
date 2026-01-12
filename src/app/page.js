import AboutPremium from './home/Component/About/Aboutus';
import { CompanyStrengths } from './home/Component/CompanyStrengths/CompanyStrengths';
import StatsCards from './home/Component/CompanyStrengths/StatsCards';
import { Hero } from './home/Component/Hero/Hero';
import MarketWeServe from './home/Component/MarketWeServe/MarketWeServe';
import OurClients from './home/Component/OurClient/Ourclient';
import SuccessfulProjects from './home/Component/Project';

export default function Home() {
  return (
    <main className=" z-10 min-h-screen overflow-hidden px-5 md:px-10 lg:mx-auto lg:w-full lg:px-0 w-full max-w-2xl:w-3/4 2xl:max-w-480 mx-auto">
      <Hero />
      <AboutPremium />
      <MarketWeServe />
      <CompanyStrengths />
      <StatsCards />
      <SuccessfulProjects />
      <OurClients />
    </main>
  );
}
