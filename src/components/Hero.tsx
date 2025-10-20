"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import amerasiaLogo from "@/assets/amerasia-logo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-secondary">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Image 
            src={amerasiaLogo} 
            alt="Amerasia Technology Solutions" 
            className="mx-auto mb-8 w-64 md:w-96 animate-scale-in"
          />
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Tu aliado estratégico que reduce costos y maximiza resultados
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Expertos en cobranzas y ventas con soluciones tecnológicas innovadoras
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 shadow-elevated hover:shadow-xl transition-all hover:scale-105"
              onClick={() => scrollToSection('servicios')}
            >
              Conocer Servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transition-all hover:scale-105"
              onClick={() => scrollToSection('contacto')}
            >
              Contactar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
