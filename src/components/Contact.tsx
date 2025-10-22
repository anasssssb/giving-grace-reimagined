import { Card, CardContent } from "@/components/ui/card";
import { Building2, Hash, CreditCard, Code, MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const donationDetails = [
    { icon: Building2, label: "Account Title", value: "Jeway Khan Foundation" },
    { icon: Hash, label: "Account No", value: "3549301000000188" },
    { icon: CreditCard, label: "IBAN #", value: "PK70FAYS3549301000000188" },
    { icon: Code, label: "Swift Code", value: "FAYSPKKA" },
    { icon: Hash, label: "Branch Code", value: "3549" },
    { icon: MapPin, label: "Bank Address", value: "Faysal Bank Ltd 310 - Upper Mall Branch Lahore" },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Make a Difference Today
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mb-8 rounded-full mx-auto"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your contribution can change lives. Every donation helps us continue our mission of serving humanity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Donation Details */}
          <Card className="shadow-strong border-0 bg-card animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-foreground">
                Donation Details
              </h3>
              <div className="space-y-6">
                {donationDetails.map((detail, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-soft">
                      <detail.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-muted-foreground mb-1">
                        {detail.label}
                      </p>
                      <p className="text-base font-medium text-foreground break-all">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-strong border-0 bg-gradient-primary text-primary-foreground animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold opacity-90 mb-1">
                        Email Address
                      </p>
                      <a href="mailto:servantjkf@gmail.com" className="text-base font-medium text-white hover:underline break-all">
                        servantjkf@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold opacity-90 mb-1">
                        Contact Number
                      </p>
                      <a href="tel:03224818200" className="text-base font-medium text-white hover:underline">
                        0322 4818200
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-strong border-0 bg-gradient-secondary text-secondary-foreground animate-fade-in">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Every Contribution Matters
                </h3>
                <p className="mb-6 opacity-90">
                  Whether big or small, your donation helps us provide essential services to those who need it most.
                </p>
                <div className="text-4xl font-bold mb-2">💝</div>
                <p className="text-sm opacity-90">
                  Together, we can create lasting change
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
