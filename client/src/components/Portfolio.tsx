import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const plugins = [
    {
      name: "LifeSteal SMP",
      description: "Plugin twist où les joueurs peuvent voler des coeurs en tuant d'autres joueurs. Mécaniques équilibrées et configurables.",
      gradient: "from-primary to-primary/60",
      icon: "fas fa-puzzle-piece",
      category: "SMP Twist",
      tags: ["PvP", "Survie", "Configurable"],
      tagColors: ["bg-primary/10 text-primary", "bg-accent/10 text-accent", "bg-blue-500/10 text-blue-400"],
      downloads: "+500"
    },
    {
      name: "Territory Wars",
      description: "Système de territoires avancé permettant aux guildes de revendiquer et défendre des zones avec mécaniques de guerre.",
      gradient: "from-accent to-accent/60",
      icon: "fas fa-shield-alt",
      category: "Protection",
      tags: ["Guildes", "Territoires", "PvP"],
      tagColors: ["bg-primary/10 text-primary", "bg-accent/10 text-accent", "bg-blue-500/10 text-blue-400"],
      downloads: "+300"
    },
    {
      name: "Advanced Economy",
      description: "Système économique complet avec marché dynamique, taxes, inflation et mécaniques de trading avancées.",
      gradient: "from-blue-500 to-blue-600/60",
      icon: "fas fa-coins",
      category: "Économie",
      tags: ["Économie", "Trading", "Marché"],
      tagColors: ["bg-primary/10 text-primary", "bg-accent/10 text-accent", "bg-blue-500/10 text-blue-400"],
      downloads: "+800"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez quelques-uns de nos plugins les plus innovants développés pour la communauté Minecraft
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plugins.map((plugin, index) => (
            <Card key={index} className="bg-background border-border overflow-hidden card-hover" data-testid={`card-plugin-${index}`}>
              <div className={`h-48 bg-gradient-to-br ${plugin.gradient} relative minecraft-bg`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className={`${plugin.icon} text-4xl`} style={{ color: 'rgba(255, 255, 255, 0.9)' }}></i>
                </div>
                <div className="absolute top-4 left-4 bg-background/90 px-3 py-1 rounded-full text-sm font-medium">
                  {plugin.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{plugin.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {plugin.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {plugin.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`${plugin.tagColors[tagIndex]} px-3 py-1 rounded-full text-xs`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    <i className="fas fa-download mr-1"></i>{plugin.downloads} téléchargements
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80" data-testid={`button-plugin-details-${index}`}>
                    <i className="fas fa-arrow-right"></i>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-all-plugins">
            <a href="https://discord.gg/dUefNv89Ht" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord mr-2"></i>Voir tous nos plugins sur Discord
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}