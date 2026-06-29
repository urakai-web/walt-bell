import { useState, useCallback } from "react";
import Splash from "./components/Splash";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Reasons from "./components/Reasons";
import Flow from "./components/Flow";
import Area from "./components/Area";
import Contact from "./components/Contact";
import Company from "./components/Company";
import Footer from "./components/Footer";
import FixedCTA from "./components/FixedCTA";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {showSplash && <Splash onComplete={handleSplashComplete} />}
      <Header />
      <Hero />
      <Services />
      <Reasons />
      <Flow />
      <Area />
      <Contact />
      <Company />
      <Footer />
      <FixedCTA />
    </div>
  );
}
