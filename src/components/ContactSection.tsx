import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nitishnanda578@gmail.com",
      href: "mailto:nitishnanda578@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9861017317",
      href: "tel:+919861017317"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Brajrajnagar, Jharsuguda, 768201",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Nitish09s",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/nitish-nanda-538551324/",
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:nitishnanda578@gmail.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">{item.label}</p>
                        <a 
                          href={item.href}
                          className="text-white hover:text-white/80 transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                     {socialLinks.map((social, index) => (
                       <a
                         key={index}
                         href={social.href}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                         aria-label={social.label}
                       >
                         <social.icon className="w-5 h-5" />
                       </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Call to Action */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Let's Work Together
                  </h3>
                  
                  <p className="text-white/80 mb-8">
                    Whether you have a project in mind, want to collaborate, or just want to say hello, 
                    I'd love to hear from you. Let's create something amazing together!
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-white text-primary hover:bg-white/90 shadow-glow"
                      onClick={() => window.location.href = 'mailto:nitishnanda578@gmail.com'}
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </Button>
                    
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full bg-white/10 border-white/20 hover:bg-white/20 text-white"
                      onClick={() => window.location.href = 'tel:+919861017317'}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Me
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;