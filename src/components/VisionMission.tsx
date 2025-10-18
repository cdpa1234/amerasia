import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="border-border hover:shadow-card transition-all duration-300 animate-fade-in bg-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Visión
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
              Consolidarnos para el año 2030 como el referente indiscutible en Latinoamérica en soluciones
              estratégicas de tercerización (BPO) en cobranza, servicio al cliente y ventas. Seremos reconocidos
               por nuestra capacidad de transformar los desafíos de nuestros aliados en oportunidades de crecimiento,
                sustentados en la innovación tecnológica, la excelencia operativa y la construcción de relaciones de confianza a largo plazo.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-card transition-all duration-300 animate-fade-in bg-card" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Misión
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proveer soluciones de Outsourcing de procesos de negocio (BPO) altamente eficientes en las áreas
                de cobranza, servicio al cliente y ventas. Impulsamos la optimización de costos y la mejora de resultados,
                actuando como un aliado estratégico que consolida la relación de la empresa con sus clientes para lograr un crecimiento sostenible y confiable
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
