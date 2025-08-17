import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, Brain, BarChart3 } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Palo Alto Cybersecurity",
      organization: "AICTE Eduskills Virtual Internships",
      description: "Hands-on experience in security concepts and cybersecurity fundamentals",
      icon: Shield,
      category: "Security"
    },
    {
      title: "Google AI/ML",
      organization: "AICTE Eduskills Virtual Internships", 
      description: "Internship focused on AI and ML fundamentals and practical applications",
      icon: Brain,
      category: "AI/ML"
    },
    {
      title: "Alteryx Data Analytics",
      organization: "AICTE Eduskills Virtual Internships",
      description: "Learned comprehensive data analysis techniques and tools",
      icon: BarChart3,
      category: "Data Analytics"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and learning achievements that enhance my technical expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-large transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-skill-gradient rounded-lg flex items-center justify-center">
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {cert.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-foreground">{cert.title}</CardTitle>
                <p className="text-primary font-medium text-sm">{cert.organization}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Languages Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Languages</h3>
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>
          </div>
          
          <Card className="max-w-2xl mx-auto bg-card border-border">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">English</h4>
                  <Badge className="bg-primary text-primary-foreground">Fluent</Badge>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Hindi</h4>
                  <Badge className="bg-primary text-primary-foreground">Fluent</Badge>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Odia</h4>
                  <Badge className="bg-accent text-accent-foreground">Native</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;