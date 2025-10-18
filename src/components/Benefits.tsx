import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Ahorro estimado del 30% frente a la contratación legal interna",
  "Procesos ágiles respaldados por abogados expertos",
  "Mayor tasa de recuperación de cartera",
  "Incremento en ventas y fidelización de clientes",
  "Aliado estratégico con visión a largo plazo",
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Beneficios de Aliarte con Nosotros
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aliados en la gestión, líderes en la eficiencia
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-card transition-all duration-300 hover:scale-102 animate-fade-in bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <p className="text-lg text-foreground pt-1">{benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
