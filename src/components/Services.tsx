import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, TrendingUp, Phone, DollarSign, Building2 } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Cobro Integral",
    description: "Cobro preventivo, administrativo, jurídico y judicial con procesos integrales de recuperación de cartera.",
  },
  {
    icon: Phone,
    title: "Ventas Multicanal",
    description: "Inbound, outbound, fidelización y retención de clientes a través de múltiples canales de comunicación.",
  },
  {
    icon: DollarSign,
    title: "Reducción de Costos",
    description: "Optimizamos tus costos operativos con procesos eficientes y tecnología de punta.",
  },
  {
    icon: TrendingUp,
    title: "Recuperación de Cartera",
    description: "Mayor tasa de recuperación gracias a nuestra experiencia y metodología comprobada.",
  },
  {
    icon: Building2,
    title: "Sede en Bogotá",
    description: "Sede propia en Bogotá con respaldo local y experiencia comprobada en el mercado colombiano.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Qué hacemos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales para la gestión de cobranzas y ventas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
