const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Spotless Solutions</h3>
            <p className="text-sm text-background/80 mb-4">
              Your trusted partner for professional cleaning products and fumigation services.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs">
                f
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs">
                t
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs">
                in
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Disinfectants</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Degreasers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Sanitizers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Bulk Orders</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Residential Fumigation</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Commercial Services</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Emergency Response</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>+1 (555) 123-4567</li>
              <li>info@spotlessolutions.com</li>
              <li>123 Clean Street<br />Professional District<br />City, State 12345</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2024 Spotless Solutions. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;