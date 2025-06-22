import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Index = () => {
  const skills = [
    "Business Analysis",
    "Digital Banking",
    "Salesforce CRM",
    "AML Compliance",
    "Product Management",
  ];

  const projects = [
    {
      title: "AI Chatbot for VIB",
      role: "Senior Business Analyst",
      description:
        "Led the implementation of an AI-powered customer service chatbot for Vietnam International Bank, improving customer response time by 70%.",
      impact:
        "Reduced customer service costs by 40% and improved customer satisfaction scores",
      date: "2024",
      location: "Ho Chi Minh City",
    },
    {
      title: "AML Solution for Securities Sector",
      role: "Solution Consultant",
      description:
        "Designed and implemented comprehensive Anti-Money Laundering solution for securities companies, ensuring regulatory compliance.",
      impact:
        "Achieved 100% regulatory compliance and reduced false positives by 60%",
      date: "2024",
      location: "Vietnam",
    },
    {
      title: "Backbase Digital Banking Implementation",
      role: "Business Analyst Lead",
      description:
        "Led the digital transformation initiative for ABBANK, implementing Backbase digital banking platform for enhanced customer experience.",
      impact:
        "Increased digital adoption rate by 85% and reduced branch visits by 50%",
      date: "2022–2023",
      location: "Hanoi",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Hi, I'm Thao Dinh
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A Business Analyst and Solution Consultant helping financial
                  institutions transform through smart digital solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View My Projects
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download My CV
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 bg-muted rounded-full flex items-center justify-center">
                <div className="text-muted-foreground text-center">
                  <div className="w-32 h-32 bg-accent rounded-full mx-auto mb-4"></div>
                  <p className="text-sm">Professional Photo</p>
                  <p className="text-xs opacity-70">Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 10 years of experience in the Banking, Financial
                Services, and Insurance (BFSI) sector, I specialize in
                Anti-Money Laundering (AML), Loan Origination Systems (LOS),
                Master Data Management (MDM), Customer Relationship Management
                (CRM), and Digital Banking solutions.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Current Role: CMC TS</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-foreground">
                    BA Mentor at VTI Academy since March 2025
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm py-1 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {project.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">
                      Impact:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {project.impact}
                    </p>
                  </div>

                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{project.date}</span>
                    <span>{project.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Mentorship & Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>BA Mentoring Program</CardTitle>
                <CardDescription>VTI Academy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Mentoring young professionals in Business Analysis, sharing
                  practical knowledge and industry best practices to help them
                  excel in their careers.
                </p>
                <p className="text-sm text-muted-foreground">
                  Since March 2025
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">BA Mentoring 1:1</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">In-house BA Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">
                    AML/CRM Systems Consulting
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground">
                    thaodtt.works@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-foreground">+84 944 883 528</span>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  <span className="text-foreground">LinkedIn Profile</span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                    placeholder="Your email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                    placeholder="Your message"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Thao Dinh. Business Analyst & Solution Consultant.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
