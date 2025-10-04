const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-medium">
              <span className="text-3xl font-bold text-primary-foreground">JK</span>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-background">JEWAY KHAN</h3>
              <p className="text-sm text-background/80">FOUNDATION</p>
            </div>
          </div>
          
          <p className="text-background/80 mb-6 max-w-2xl mx-auto leading-relaxed">
            Dedicated to serving humanity with compassion, providing essential support to those in need, and creating lasting positive change in our communities.
          </p>

          <div className="border-t border-background/20 pt-6 mt-6">
            <p className="text-sm text-background/60">
              © {currentYear} Jeway Khan Foundation. All rights reserved.
            </p>
            <p className="text-xs text-background/50 mt-2">
              Serving humanity with love, honour, and dedication
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
