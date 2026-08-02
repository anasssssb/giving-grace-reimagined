import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Activities from "@/components/Activities";
import Gallery from "@/components/Gallery";
import Certificates from "@/components/Certificates";
import Audits from "@/components/Audits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Activities />
      <Gallery />
      <Certificates />
      <Audits />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
