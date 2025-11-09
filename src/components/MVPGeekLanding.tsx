import Navigation from "./Navigation";
import Hero from "./Hero";
import Problem from "./Problem";
import Solution from "./Solution";
import Testimonials from "./Testimonials";
import Process from "./Process";
import Services from "./Services";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";

const MVPGeekLanding = () => {
  return (
    <div className="bg-[#0D0A08] text-white min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Problem Section */}
      <Problem />

      {/* Solution Section */}
      <Solution />

      {/* Testimonials Section */}
      <Testimonials />

      {/* How It Works */}
      <Process />

      {/* Services Section */}
      <Services />

      {/* FAQ */}
      <Faq />

      {/* Final CTA / Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MVPGeekLanding;
