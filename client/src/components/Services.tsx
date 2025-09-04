import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: "fas fa-cubes",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      title: "Plugins Personnalisés",
      description: "Développement de plugins sur mesure pour répondre à vos besoins spécifiques et améliorer l'expérience de jeu.",
      features: [
        "Fonctionnalités personnalisées",
        "Optimisation performance",
        "Support technique inclus"
      ]
    },
    {
      icon: "fas fa-magic",
      iconColor: "text-accent",
      bgColor: "bg-accent/10",
      title: "Twists pour SMP",
      description: "Spécialisation dans la création de twists innovants pour serveurs SMP, apportant une dimension unique à votre gameplay.",
      features: [
        "Mécaniques innovantes",
        "Équilibrage parfait",
        "Configuration flexible"
      ]
    },
    {
      icon: "fas fa-cogs",
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/10",
      title: "Maintenance & Support",
      description: "Support continu, mises à jour et maintenance de vos plugins pour garantir leur bon fonctionnement.",
      features: [
        "Mises à jour régulières",
        "Support réactif",
        "Corrections de bugs"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Nos Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Développement complet de plugins Minecraft adaptés à vos besoins spécifiques
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-border card-hover" data-testid={`card-service-${index}`}>
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                  <i className={`${service.icon} ${service.iconColor} text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground">
                      <i className="fas fa-check text-primary mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}