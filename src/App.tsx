import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Reasons from "./components/Reasons";
import Area from "./components/Area";
import Contact from "./components/Contact";
import Company from "./components/Company";
import Footer from "./components/Footer";
import FixedCTA from "./components/FixedCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <Services />
      <Reasons />
      <Area />
      <Contact />
      <Company />
      <Footer />
      <FixedCTA />
    </div>
  );
}
