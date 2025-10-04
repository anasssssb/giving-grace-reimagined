import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Our Mission", id: "mission" },
    { label: "Activities", id: "activities" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact Us", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("home")}>
            <img src={logo} alt="Jeway Khan Foundation Logo" className="h-16 w-auto" />
            <div>
              <h2 className="text-xl font-bold text-foreground">JEWAY KHAN</h2>
              <p className="text-xs text-muted-foreground">FOUNDATION</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-secondary text-secondary-foreground hover:opacity-90 transition-opacity shadow-medium"
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-background/95 backdrop-blur-lg rounded-b-lg shadow-lg animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-gradient-secondary text-secondary-foreground"
              >
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
