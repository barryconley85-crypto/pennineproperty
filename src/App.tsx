import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import HowWeHelp from './components/HowWeHelp';
import WhyChooseUs from './components/WhyChooseUs';
import SellYourProperty from './components/SellYourProperty';
import InvestmentOpportunities from './components/InvestmentOpportunities';
import HowItWorks from './components/HowItWorks';
import SuccessStories from './components/SuccessStories';
import Testimonials from './components/Testimonials';
import MeetTheTeam from './components/MeetTheTeam';
import FAQ from './components/FAQ';
import LatestNews from './components/LatestNews';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <HowWeHelp />
        <WhyChooseUs />
        <SellYourProperty />
        <InvestmentOpportunities />
        <HowItWorks />
        <SuccessStories />
        <Testimonials />
        <MeetTheTeam />
        <FAQ />
        <LatestNews />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
