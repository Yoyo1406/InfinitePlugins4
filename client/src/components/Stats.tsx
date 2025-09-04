export default function Stats() {
  const stats = [
    {
      value: "100+",
      label: "Plugins Développés"
    },
    {
      value: "50+",
      label: "Clients Satisfaits"
    },
    {
      value: "3+",
      label: "Années d'Expérience"
    },
    {
      value: "24/7",
      label: "Support Discord"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6" data-testid={`stat-${index}`}>
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}