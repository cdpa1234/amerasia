import industriaComercio from "@/assets/industria-comercio.jpeg";
import Image from "next/image";
import experian from "@/assets/experian.jpeg";
import painita from "@/assets/painita.jpeg";
import nexeco from "@/assets/nexeco.jpeg";

const Partners = () => {
  const partners = [
    { name: "Industria y Comercio", logo: industriaComercio },
    { name: "DataCrédito Experian", logo: experian },
    { name: "Painita Créditos VIP", logo: painita },
    { name: "Nexeco", logo: nexeco },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Aliados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabajamos con los mejores socios estratégicos para ofrecer soluciones integrales
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="bg-card border border-border rounded-lg p-8 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                className="w-full h-auto object-contain max-h-24"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
