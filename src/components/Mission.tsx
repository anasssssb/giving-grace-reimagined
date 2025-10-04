import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Shield } from "lucide-react";

const Mission = () => {
  const missionItems = [
    {
      icon: Heart,
      title: "Saving Children",
      description: "Our main mission is to save and rescue permanently displaced children.",
    },
    {
      icon: Users,
      title: "Peace On The Planet",
      description: "By working with our partners, we aim to establish peaceful relationships.",
    },
    {
      icon: Shield,
      title: "Care & Protection",
      description: "We provide global care and protection to support children all over the world.",
    },
  ];

  return (
    <section id="mission" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Mission
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mb-8 rounded-full mx-auto"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We strive to provide health facilities for the decrepit indigent, provision of basic needs to the destitute struggling to keep body and souls together. Also to submit pecuniary and substantial support to widows and orphans for their social enhancement and to help the impoverished under privileged in calamities, pandemics, exigent desideratum etc.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {missionItems.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-muted/30 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-6 flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform">
                  <item.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
