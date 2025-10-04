import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, GraduationCap, Heart, AlertCircle } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: DollarSign,
      title: "Financial support to widows and orphans",
      description: "Providing essential financial assistance to help widows and orphans lead dignified lives.",
    },
    {
      icon: GraduationCap,
      title: "Educational help for the deserving students",
      description: "Supporting education for deserving students to build a brighter future.",
    },
    {
      icon: Heart,
      title: "Free medicine for the poor",
      description: "Distributing free medicine to those who cannot afford essential healthcare.",
    },
    {
      icon: AlertCircle,
      title: "Provision of help on emergent needs",
      description: "Responding quickly to urgent situations and emergency assistance requirements.",
    },
  ];

  return (
    <section id="activities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Activities
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mb-8 rounded-full mx-auto"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Through our various programs and initiatives, we work tirelessly to bring positive change to the lives of those in need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-0 bg-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-primary mb-4 flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <activity.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {activity.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
