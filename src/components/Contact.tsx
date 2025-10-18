import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground">
            Estamos listos para ser tu aliado estratégico
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border shadow-card bg-card">
            <CardHeader className="text-center bg-gradient-to-r from-primary to-secondary">
              <CardTitle className="text-3xl text-white">
                AMERASIA TECHNOLOGY SOLUTIONS S.A.S.
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">Ubicación</h3>
                  <p className="text-muted-foreground">AC 90#84B-08 Bogotá, Colombia</p>
                </div>

                <div className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">Teléfono</h3>
                  <p className="text-muted-foreground">(+57)3053572735</p>
                </div>

                <div className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">Email</h3>
                  <p className="text-muted-foreground">amerasiansolutions@gmail.com</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 shadow-elevated text-white"
                  asChild
                >
                  <a 
                    href="https://wa.me/573053572735?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Informacion via Whatsapp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
