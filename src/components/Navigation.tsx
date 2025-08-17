import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', action: scrollToTop },
    { label: 'About', action: () => scrollToSection('about') },
    { label: 'Skills', action: () => scrollToSection('skills') },
    { label: 'Projects', action: () => scrollToSection('projects') },
    { label: 'Education', action: () => scrollToSection('education') },
    { label: 'Certifications', action: () => scrollToSection('certifications') },
    { label: 'Contact', action: () => scrollToSection('contact') }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-medium' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            Nitish Nanda
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className={`transition-colors duration-300 hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm rounded-lg shadow-large mt-2 py-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="block w-full text-left px-6 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;