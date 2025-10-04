import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://charity.millionsbit.net/assets/wide1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 inline-block">
            <div className="mb-6 mx-auto">
              <img src={logo} alt="Jeway Khan Foundation Logo" className="h-40 w-auto mx-auto" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              JEWAY KHAN
            </h1>
            <p className="text-2xl md:text-3xl font-light tracking-wide text-white/90">
              FOUNDATION
            </p>
          </div>

          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            Serving humanity with compassion, dedication, and unwavering commitment to those in need
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("about")}
              className="bg-white text-primary hover:bg-white/90 shadow-strong text-lg px-8 py-6 group"
            >
              Learn Our Story
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-strong text-lg px-8 py-6"
            >
              Make a Difference
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
