const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary via-primary-light to-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">
            AMERASIA TECHNOLOGY SOLUTIONS S.A.S.
          </p>
          <p className="text-white/80 text-sm mb-4">
            "Aliados en la gestión, líderes en la eficiencia."
          </p>
          <p className="text-white/60 text-xs">
            © {new Date().getFullYear()} Amerasia Technology Solutions. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
