import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import cleaningProductsImage from "@/assets/cleaning-products.jpg";
import dishwashingLemon750 from "@/assets/dishwashing-lemon-750ml.jpg";
import dishwashingCitrus2L from "@/assets/dishwashing-citrus-2l.jpg";
import bubbleBathJasmine from "@/assets/bubble-bath-jasmine.jpg";

const products = [
  {
    name: "Superfes Dishwashing Liquid (Lemon)",
    description: "Premium lemon-scented dishwashing liquid for superior grease cutting and sparkling clean dishes.",
    price: "$4.99",
    image: dishwashingLemon750,
    features: ["Fresh Lemon Scent", "Superior Grease Cutting", "Concentrated Formula", "750ml"]
  },
  {
    name: "Superfes Dishwashing Liquid (Citrus)",
    description: "Powerful citrus-scented dishwashing liquid for heavy-duty cleaning and fresh fragrance.",
    price: "$7.99",
    image: dishwashingCitrus2L,
    features: ["Citrus Fragrance", "Heavy-Duty Formula", "2 Litre Value Size", "Professional Grade"]
  },
  {
    name: "Superfes Bubble Bath (Jasmine)",
    description: "Luxurious jasmine-scented bubble bath for a relaxing and refreshing bathing experience.",
    price: "$5.99",
    image: bubbleBathJasmine,
    features: ["Jasmine Blossom Scent", "Rich Luxurious Foam", "Moisturizing Formula", "1 Litre"]
  }
];

const ProductsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Premium Cleaning Agents
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional-grade cleaning products trusted by businesses and homeowners alike.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={cleaningProductsImage} 
              alt="Professional cleaning products"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Why Choose Our Products?
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                <span>EPA certified and environmentally safe formulations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                <span>Proven effectiveness against bacteria, viruses, and fungi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                <span>Suitable for both commercial and residential use</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                <span>Competitive pricing with bulk discounts available</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <div className="p-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-contain rounded-lg mb-4"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="default" className="w-full" onClick={() => window.location.href='quotation.html'}>
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;