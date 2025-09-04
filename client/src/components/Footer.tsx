export default function Footer() {
  const services = [
    "Plugins Personnalisés",
    "Twists SMP",
    "Maintenance",
    "Support Technique"
  ];

  const socialLinks = [
    {
      href: "https://discord.gg/dUefNv89Ht",
      icon: "fab fa-discord",
      label: "Discord"
    },
    {
      href: "#",
      icon: "fab fa-github",
      label: "GitHub"
    }
  ];

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-cube text-primary-foreground text-xl"></i>
              </div>
              <span className="text-2xl font-bold gradient-text">InfinitePlugins</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Société de développement spécialisée dans la création de plugins Minecraft innovants et de twists pour serveurs SMP.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? "_blank" : undefined}
                  rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid={`link-social-${index}`}
                  aria-label={link.label}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-primary transition-colors" data-testid={`link-service-${index}`}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <i className="fab fa-discord mr-2 text-primary"></i>
                <a 
                  href="https://discord.gg/dUefNv89Ht" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  data-testid="link-discord-footer"
                >
                  Discord
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-primary"></i>
                <span>Via Discord uniquement</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 InfinitePlugins. Tous droits réservés. | Développé avec passion pour la communauté Minecraft
          </p>
        </div>
      </div>
    </footer>
  );
}