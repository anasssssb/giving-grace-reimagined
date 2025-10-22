import { Card } from "@/components/ui/card";
import registrationCert from "@/assets/certificates/registration-certificate.jpg";
import charityCert from "@/assets/certificates/charity-certificate.jpg";
import fbrAcknowledgement from "@/assets/certificates/fbr-acknowledgement.jpg";
import { Award } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Societies Registration Certificate",
      image: registrationCert,
      description: "Registered under Societies Registration Act, XXI of 1860",
      date: "Registration No: RP-01 of 2021"
    },
    {
      title: "Punjab Charity Commission Certificate",
      image: charityCert,
      description: "Category (A) Charity - Provisional Registration",
      date: "Registration No: PB-2539013090195149"
    },
    {
      title: "FBR Tax Acknowledgement",
      image: fbrAcknowledgement,
      description: "Return of Income filed for Tax Year 2024",
      date: "Registration No: 4512822"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6">
            <Award className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Certifications & Recognition
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mb-8 rounded-full mx-auto"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Officially registered and recognized by the Government of Pakistan, ensuring transparency and accountability in all our operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden shadow-strong hover:shadow-xl transition-all duration-300 border-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <p className="text-sm text-muted-foreground mb-2">{cert.date}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block shadow-medium border-0 bg-muted/50">
            <div className="p-8">
              <p className="text-lg text-muted-foreground max-w-2xl">
                All our certifications are verified and up-to-date, demonstrating our commitment to legal compliance and ethical practices in serving our community.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
