import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const Audits = () => {
  const auditReports = [
    {
      year: "2025",
      period: "Year Ended 30 June 2025",
      file: "/audits/audit-report-2025.pdf",
    },
    {
      year: "2024",
      period: "Year Ended 30 June 2024",
      file: "/audits/audit-report-2024.pdf",
    },
    {
      year: "2023",
      period: "Year Ended 30 June 2023",
      file: "/audits/audit-report-2023.pdf",
    },
    {
      year: "2022",
      period: "Year Ended 30 June 2022",
      file: "/audits/audit-report-2022.pdf",
    },
  ];

  return (
    <section id="audits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Financial Audits</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparency and accountability are at the core of our operations. View our independently audited financial reports.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {auditReports.map((report) => (
            <Card key={report.year} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Audit Report {report.year}</CardTitle>
                      <CardDescription>{report.period}</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full" variant="outline">
                  <a href={report.file} target="_blank" rel="noopener noreferrer" download>
                    <Download className="h-4 w-4 mr-2" />
                    Download Report
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            All reports are independently audited and verified for accuracy and compliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Audits;
