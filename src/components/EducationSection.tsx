import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Government College of Engineering Kalahandi",
      location: "Odisha",
      period: "Expected: Nov 2026",
      description: "Currently in third year with strong foundation in computer science fundamentals, programming, and software development.",
      current: true
    },
    {
      degree: "Senior Secondary (Science)",
      institution: "Vikash H.S. School",
      location: "Bargarh, Odisha", 
      period: "Mar 2022",
      description: "Completed higher secondary education with focus on science subjects.",
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey in computer science and engineering.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${
                  edu.current ? 'bg-primary' : 'bg-accent'
                } shadow-medium`}>
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <Card className="ml-6 flex-1 bg-card border-border hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                      <h3 className="text-xl font-semibold text-foreground mb-2 lg:mb-0">
                        {edu.degree}
                      </h3>
                      {edu.current && (
                        <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <h4 className="text-lg font-medium text-primary mb-3">
                      {edu.institution}
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-3 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;