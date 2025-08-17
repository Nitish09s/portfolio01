import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="mx-auto w-32 h-32 bg-card rounded-full shadow-glow mb-8 flex items-center justify-center text-6xl font-bold text-primary">
            N
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Nitish Nanda
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Computer Science Engineering Student
          </p>
          
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Third-year CSE student with a strong foundation in web development and cloud computing.
            Passionate about building innovative solutions using modern technologies.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Brajrajnagar, Jharsuguda</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">9861017317</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">nitishnanda578@gmail.com</span>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20 text-white">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20 text-white">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20 text-white">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;