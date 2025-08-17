import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C++", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express.js"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "DynamoDB"]
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS S3", "DynamoDB", "Cognito", "Git", "VS Code", "Postman", "Docker"]
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures", "Algorithms", "REST APIs", "Responsive Design"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;