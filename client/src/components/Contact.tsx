import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const contactInfo = [
    {
      icon: "fab fa-discord",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      title: "Discord",
      content: (
        <a href="https://discord.gg/dUefNv89Ht" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
          https://discord.gg/dUefNv89Ht
        </a>
      )
    },
    {
      icon: "fas fa-clock",
      iconColor: "text-accent",
      bgColor: "bg-accent/10",
      title: "Disponibilité",
      content: <p className="text-muted-foreground">Lun - Dim, 9h00 - 22h00 CET</p>
    },
    {
      icon: "fas fa-language",
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/10",
      title: "Langues",
      content: <p className="text-muted-foreground">Français, Anglais</p>
    }
  ];

  const processSteps = [
    {
      number: "1",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground",
      title: "Rejoignez notre Discord",
      description: "Cliquez sur le lien pour accéder à notre serveur"
    },
    {
      number: "2",
      bgColor: "bg-accent",
      textColor: "text-accent-foreground",
      title: "Décrivez votre projet",
      description: "Expliquez vos besoins en détail dans le canal approprié"
    },
    {
      number: "3",
      bgColor: "bg-blue-500",
      textColor: "text-white",
      title: "Recevez votre devis",
      description: "Nous vous fournirons un devis détaillé et les délais"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Contactez-nous</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prêt à donner vie à vos idées de plugins ? Rejoignez notre Discord pour discuter de votre projet
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Informations de Contact</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4" data-testid={`contact-info-${index}`}>
                    <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center`}>
                      <i className={`${info.icon} ${info.iconColor} text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      {info.content}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Processus de Commande</h3>
              
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4" data-testid={`order-step-${index}`}>
                    <div className={`w-8 h-8 ${step.bgColor} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                      <span className={`${step.textColor} text-sm font-bold`}>{step.number}</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-center mb-2">
                  <i className="fas fa-info-circle text-primary mr-2"></i>
                  <span className="font-medium text-primary">Note Importante</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tous les paiements et discussions se font exclusivement via notre serveur Discord pour votre sécurité.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-16">
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg transition-all text-lg px-12 py-6"
            data-testid="button-start-project"
          >
            <a href="https://discord.gg/dUefNv89Ht" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord mr-3 text-2xl"></i>
              Commencer votre projet maintenant
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}