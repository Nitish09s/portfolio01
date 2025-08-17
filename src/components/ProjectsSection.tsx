import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Responsive VPN Clone",
      description: "A fully responsive website clone built using modern web technologies. Features optimized design for both desktop and mobile users with clean, professional UI/UX.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveDemo: "#",
      github: "#",
      featured: true
    },
    // Adding more projects to showcase skills
    {
      title: "Full-Stack Web Application",
      description: "A complete web application built with React.js frontend and Node.js backend, featuring user authentication and database integration.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      liveDemo: "#",
      github: "#",
      featured: false
    },
    {
      title: "Cloud-Based Data Management",
      description: "A cloud-native application utilizing AWS services for scalable data storage and retrieval with secure user management.",
      technologies: ["AWS S3", "DynamoDB", "Cognito", "React.js"],
      liveDemo: "#",
      github: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development work, demonstrating proficiency in various technologies 
            and problem-solving approaches.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-card border-border hover:shadow-large transition-all duration-300 hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  {project.featured && (
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  )}
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;