import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      icon: "fas fa-rocket",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      title: "Performance Optimisée",
      description: "Nos plugins sont conçus pour minimiser l'impact sur les performances de votre serveur tout en maximisant les fonctionnalités."
    },
    {
      icon: "fas fa-puzzle-piece",
      iconColor: "text-accent",
      bgColor: "bg-accent/10",
      title: "Solutions Sur Mesure",
      description: "Chaque plugin est développé selon vos spécifications exactes, garantissant une adaptation parfaite à vos besoins."
    },
    {
      icon: "fas fa-headset",
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/10",
      title: "Support Continu",
      description: "Équipe disponible sur Discord pour support technique, mises à jour et nouvelles fonctionnalités."
    }
  ];

  const processSteps = [
    {
      number: "1",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground",
      title: "Analyse des besoins",
      description: "Discussion détaillée sur Discord"
    },
    {
      number: "2",
      bgColor: "bg-accent",
      textColor: "text-accent-foreground",
      title: "Développement",
      description: "Création et tests du plugin"
    },
    {
      number: "3",
      bgColor: "bg-blue-500",
      textColor: "text-white",
      title: "Livraison & Support",
      description: "Installation et suivi continu"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Pourquoi choisir</span><br />
              InfinitePlugins ?
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4" data-testid={`feature-${index}`}>
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                    <i className={`${feature.icon} ${feature.iconColor}`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <i className="fas fa-code text-primary-foreground text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold">Processus de Développement</h3>
                </div>
                
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4" data-testid={`process-step-${index}`}>
                      <div className={`w-8 h-8 ${step.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <span className={`${step.textColor} text-sm font-bold`}>{step.number}</span>
                      </div>
                      <div>
                        <h4 className="font-medium">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}