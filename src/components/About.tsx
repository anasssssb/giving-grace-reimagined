import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img
              src="https://charity.millionsbit.net/assets/abt2.jpg"
              alt="About Jeway Khan Foundation"
              className="rounded-2xl shadow-strong w-full h-auto object-cover"
            />
          </div>

          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Us
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mb-8 rounded-full"></div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                From amongst the descendants of Royal-blood of Bikaner-India a promising boy migrated on the eve of partition of India, in his early childhood and rose from the scratches with his intrinsic conviction to serve kinsfolk, fraternity and humanity.
              </p>
              
              <p>
                He devoted himself for the above with unflinching resolution. His life emblemed with diligence, indomitable belief, candid probity, candour traits and intrinsic rectitude, brought him impeccable fame.
              </p>
              
              <p>
                Such propriety of modus-vivendi is the paramount paraenesis for us the progeny, to keep the same pace in the realms of service to humanity, alleviation of destitution and amelioration of the impecunious.
              </p>
              
              <p className="text-xl font-semibold text-primary mt-6">
                We asseverate to tread the same path of love, honour and coaction, shown to us by the epitome of philanthropy, our progenitor; Haji Jeway Khan !!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
