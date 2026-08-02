import { UserRound } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import sulaimanImg from "@/assets/board/sulaiman-ahmed.jpg";
import mustafaImg from "@/assets/board/mustafa-ahmed.jpg";
import musaImg from "@/assets/board/musa-ahmed.jpg";
import kuffatImg from "@/assets/board/kuffat-khan.jpg";

type Member = {
  name: string;
  role: string;
  image?: string;
};

const leadership: Member[] = [
  { name: "Muhammad Abdullah Ahmed", role: "Chairman" },
  { name: "Justice Retired Shehzada Mazhar", role: "Vice Chairman" },
];

const board: Member[] = [
  { name: "Muhammad Sulaiman Ahmed", role: "Finance Secretary", image: sulaimanImg },
  { name: "Muhammad Mustafa Ahmed", role: "Joint Secretary", image: mustafaImg },
  { name: "Muhammad Musa Ahmed", role: "General Secretary", image: musaImg },
  { name: "Kuffat Khan", role: "Member", image: kuffatImg },
  { name: "Adil Asghar Raja", role: "Member" },
];

const MemberCard = ({ member, featured = false }: { member: Member; featured?: boolean }) => (
  <Card className="p-6 text-center shadow-medium hover:shadow-lg transition-shadow bg-card">
    <div
      className={`${
        featured ? "w-40 h-40" : "w-32 h-32"
      } mx-auto mb-5 rounded-full overflow-hidden bg-muted flex items-center justify-center ring-4 ring-primary/20`}
    >
      {member.image ? (
        <img
          src={member.image}
          alt={`${member.name}, ${member.role} of Jeway Khan Foundation`}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      ) : (
        <UserRound className="w-1/2 h-1/2 text-muted-foreground" strokeWidth={1.5} />
      )}
    </div>
    <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
    <p className="text-sm font-medium text-primary mt-1">{member.role}</p>
  </Card>
);

const Board = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Board of Directors</h1>
            <div className="w-20 h-1 bg-gradient-primary my-6 rounded-full mx-auto"></div>
            <p className="text-muted-foreground text-lg">
              The dedicated individuals guiding Jeway Khan Foundation in its mission of service to
              humanity.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto mb-12">
            {leadership.map((m) => (
              <MemberCard key={m.name} member={m} featured />
            ))}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {board.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Board;
