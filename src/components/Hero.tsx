import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/80"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Premium Cleaning Products &
          <span className="block text-secondary">Professional Services</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Over 3 years of experience providing premium detergent products and expert cleaning services to keep your spaces spotless and fresh.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={() => window.location.href='#products'}
          >
            Shop Detergent Products
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={() => window.location.href='#services'}
          >
            View Cleaning Services
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-lg">Safe Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-lg">Emergency Service</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">5+</div>
            <div className="text-lg">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;