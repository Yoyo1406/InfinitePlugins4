import { Card, CardContent } from "@/components/ui/card";

export default function Team() {
  const team = [
    {
      name: "Yoyo1406",
      role: "Développeur Principal",
      roleColor: "text-primary",
      bgColor: "bg-primary/20",
      iconColor: "text-primary",
      description: "Expert en développement de plugins complexes et architectures serveur. Spécialisé dans l'optimisation des performances."
    },
    {
      name: "Nwayze_",
      role: "Développeur Backend",
      roleColor: "text-accent",
      bgColor: "bg-accent/20",
      iconColor: "text-accent",
      description: "Maître des systèmes complexes et de l'intégration de données. Créateur de solutions robustes et évolutives."
    },
    {
      name: "Gamer0obito",
      role: "Développeur Frontend",
      roleColor: "text-blue-400",
      bgColor: "bg-blue-500/20",
      iconColor: "text-blue-400",
      description: "Expert en expérience utilisateur et interfaces intuitives. Spécialisé dans la création de GUIs et commandes ergonomiques."
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Notre Équipe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trois développeurs passionnés unis par leur expertise en développement Minecraft
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center card-hover" data-testid={`card-team-${index}`}>
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className={`w-24 h-24 ${member.bgColor} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                    <i className={`fas fa-user ${member.iconColor} text-3xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className={`${member.roleColor} mb-4`}>{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-6">
                    {member.description}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href="#" 
                      className={`text-muted-foreground hover:${member.roleColor} transition-colors`}
                      data-testid={`link-github-${index}`}
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                    <a 
                      href="https://discord.gg/dUefNv89Ht" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-muted-foreground hover:${member.roleColor} transition-colors`}
                      data-testid={`link-discord-${index}`}
                    >
                      <i className="fab fa-discord text-xl"></i>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}