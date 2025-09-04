import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const NavLinks = ({ mobile = false }) => (
    <div className={`${mobile ? 'flex flex-col space-y-4' : 'hidden md:flex items-center space-x-8'}`}>
      <button 
        onClick={() => scrollToSection('accueil')} 
        className="nav-link text-sm font-medium"
        data-testid="nav-accueil"
      >
        Accueil
      </button>
      <button 
        onClick={() => scrollToSection('services')} 
        className="nav-link text-sm font-medium"
        data-testid="nav-services"
      >
        Services
      </button>
      <button 
        onClick={() => scrollToSection('equipe')} 
        className="nav-link text-sm font-medium"
        data-testid="nav-equipe"
      >
        Équipe
      </button>
      <button 
        onClick={() => scrollToSection('portfolio')} 
        className="nav-link text-sm font-medium"
        data-testid="nav-portfolio"
      >
        Portfolio
      </button>
      <button 
        onClick={() => scrollToSection('contact')} 
        className="nav-link text-sm font-medium"
        data-testid="nav-contact"
      >
        Contact
      </button>
    </div>
  );

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <i className="fas fa-cube text-primary-foreground text-xl"></i>
            </div>
            <span className="text-2xl font-bold gradient-text">InfinitePlugins</span>
          </div>
          
          <NavLinks />
          
          <div className="hidden md:flex">
            <a 
              href="https://discord.gg/dUefNv89Ht" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              data-testid="button-discord-header"
            >
              <i className="fab fa-discord mr-2"></i>Rejoindre Discord
            </a>
          </div>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" data-testid="button-mobile-menu">
                <i className="fas fa-bars text-xl"></i>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-border">
              <div className="flex flex-col space-y-6 mt-8">
                <NavLinks mobile />
                <a 
                  href="https://discord.gg/dUefNv89Ht" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
                  data-testid="button-discord-mobile"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fab fa-discord mr-2"></i>Rejoindre Discord
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}