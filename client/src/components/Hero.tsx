import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="pt-16 min-h-screen flex items-center minecraft-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Plugins Minecraft</span><br />
              <span className="text-foreground">Illimités</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Développement professionnel de plugins Minecraft sur mesure. 
              Spécialistes des twists pour SMP et solutions personnalisées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('services')}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="button-discover-services"
              >
                <i className="fas fa-rocket mr-2"></i>Découvrir nos services
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-border hover:bg-secondary/80"
                data-testid="button-contact-hero"
              >
                <a href="https://discord.gg/dUefNv89Ht" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-discord mr-2"></i>Nous contacter
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-card rounded-lg border border-border p-8 minecraft-bg">
              <div className="grid grid-cols-4 gap-2 h-full">
                {Array.from({ length: 16 }).map((_, i) => {
                  const colors = ['bg-primary', 'bg-accent', 'bg-secondary'];
                  const opacities = ['opacity-60', 'opacity-70', 'opacity-80', 'opacity-90'];
                  const colorClass = colors[i % colors.length];
                  const opacityClass = opacities[i % opacities.length];
                  
                  return (
                    <div 
                      key={i} 
                      className={`${colorClass} ${opacityClass} rounded transition-all duration-300 hover:opacity-100`}
                    />
                  );
                })}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
              <i className="fas fa-infinity mr-2"></i>+100 Plugins
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}