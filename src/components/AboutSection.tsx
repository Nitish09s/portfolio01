import { Card, CardContent } from "@/components/ui/card";
import { Code, Cloud, Database, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Web Development",
      description: "Proficient in HTML, CSS, JavaScript, and React.js"
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Experience with AWS services including S3, DynamoDB, and Cognito"
    },
    {
      icon: Database,
      title: "Full-Stack Development",
      description: "Skilled in Node.js, Express.js, and MongoDB"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Strong foundation in Data Structures and Algorithms"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Computer Science Engineering student with a strong foundation in web development 
            and cloud computing. I love building innovative solutions and continuously learning new technologies 
            to stay at the forefront of the tech industry.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-card-gradient border-border hover:shadow-large transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-skill-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;