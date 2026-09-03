import { Wheat, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground pb-8 pt-20 text-background sm:pt-24">
      {/* Wave top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 text-background">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[80px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mb-16 lg:grid-cols-4 lg:gap-12">
          
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-2 text-primary">
              <Wheat className="w-8 h-8" />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">Bummies Bakery</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Baking happiness into every creation. Artisan breads, decadent pastries, and custom cakes made with genuine passion.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Menu', 'Gallery', 'Testimonials'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-background/70 hover:text-primary transition-colors inline-flex items-center">
                    <span className="mr-2">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Products</h4>
            <ul className="space-y-3">
              {['Artisan Breads', 'Custom Cakes', 'French Pastries', 'Macarons & Sweets', 'Corporate Catering'].map((link) => (
                <li key={link}>
                  <a href="#menu" className="text-background/70 hover:text-primary transition-colors inline-flex items-center">
                    <span className="mr-2">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-background/70 mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12"
              />
              <Button className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-background/50 sm:flex-row sm:text-left">
          <p>© 2024 Bummies Bakery. All rights reserved. Made with ❤️</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
