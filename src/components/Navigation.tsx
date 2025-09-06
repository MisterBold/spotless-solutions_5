import { Button } from "@/components/ui/button";
import feschemLogo from "@/assets/feschem-logo-new.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={feschemLogo} alt="Feschem Logo" className="h-10 w-10" />
            <div className="font-bold text-xl text-foreground">
              Feschem (Pvt) Ltd
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => window.location.href='tel:+263713213726'}>
              Call Now
            </Button>
            <Button variant="default" size="sm" onClick={() => window.location.href='quotation.html'}>
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;