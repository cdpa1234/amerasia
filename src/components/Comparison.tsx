import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown } from "lucide-react";

const Comparison = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comparativo de Costos
          </h2>
          <p className="text-xl text-muted-foreground">
            12% sobre el valor recaudado
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-2 border-border hover:shadow-card transition-all">
              <CardHeader className="text-center bg-muted/50">
                <CardTitle className="text-2xl">Empresa Tradicional</CardTitle>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Costo mensual</p>
                  <p className="text-4xl font-bold text-foreground">$2,396,900</p>
                  <p className="text-sm text-muted-foreground mt-2">COP</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-elevated hover:shadow-xl transition-all bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader className="text-center bg-gradient-to-r from-primary to-secondary">
                <CardTitle className="text-2xl text-white">Con AMERASIA</CardTitle>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Costo mensual</p>
                  <p className="text-4xl font-bold text-primary">$1,700,000</p>
                  <p className="text-sm text-muted-foreground mt-2">COP</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary to-secondary text-white shadow-elevated">
            <CardContent className="py-6">
              <div className="flex items-center justify-center gap-3">
                <TrendingDown className="h-8 w-8" />
                <div className="text-center">
                  <p className="text-3xl font-bold">30% de Ahorro</p>
                  <p className="text-white/90">Frente a la contratación legal interna</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
