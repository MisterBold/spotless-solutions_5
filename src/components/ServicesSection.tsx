import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import fumigationImage from "@/assets/fumigation-service.jpg";

const services = [
  {
    name: "Residential Home Cleaning",
    description: "Complete cleaning solutions for all types of residential homes including apartments, houses, and condos.",
    price: "From $89",
    duration: "2-4 hours",
    features: ["Deep Cleaning", "Regular Maintenance", "Eco-Friendly Products", "Flexible Scheduling"]
  },
  {
    name: "Elderly Care Home Cleaning",
    description: "Specialized cleaning services for elderly care facilities and nursing homes with enhanced safety protocols.",
    price: "From $149",
    duration: "3-6 hours",
    features: ["Medical-Grade Disinfection", "Safety Protocols", "Trained Staff", "Regular Monitoring"]
  },
  {
    name: "Commercial Building Cleaning",
    description: "Professional cleaning services for offices, warehouses, and commercial properties.",
    price: "Custom Quote",
    duration: "4-8 hours",
    features: ["Large Scale Cleaning", "Minimal Disruption", "Compliance Standards", "Scheduled Service"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Professional Cleaning Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert cleaning solutions for all types of residential homes and commercial properties with guaranteed results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Comprehensive Cleaning Solutions
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our certified cleaning professionals use state-of-the-art equipment and eco-friendly methods to deliver spotless results while ensuring the safety of your family, pets, and environment.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">800+</div>
                <div className="text-sm text-muted-foreground">Properties Cleaned</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
            <Button variant="contact" size="lg">
              Get Free Estimate
            </Button>
          </div>
          <div>
            <img 
              src={fumigationImage} 
              alt="Professional cleaning service"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{service.name}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <span className="text-sm text-muted-foreground">{service.duration}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="default" className="w-full">
                  Book Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;