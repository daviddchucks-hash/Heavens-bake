import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

import weddingCake from "@/assets/images/wedding-cake.png";
import birthdayCake from "@/assets/images/birthday-cake.png";
import cupcakes from "@/assets/images/cupcakes.png";
import doughnuts from "@/assets/images/doughnuts.png";
import cookies from "@/assets/images/cookies.png";
import artisanBread from "@/assets/images/artisan-bread.png";
import croissants from "@/assets/images/croissants.png";
import pastries from "@/assets/images/pastries.png";

const products = [
  { id: 1, name: "Elegant Wedding Cake", desc: "Multi-tier vanilla bean cake with custom floral designs.", price: "$150", img: weddingCake },
  { id: 2, name: "Rainbow Birthday Cake", desc: "Colorful funfetti layers with rich buttercream frosting.", price: "$65", img: birthdayCake },
  { id: 3, name: "Gourmet Cupcakes", desc: "Assorted box of 12 artisan cupcakes in pastel colors.", price: "$36", img: cupcakes },
  { id: 4, name: "Artisan Doughnuts", desc: "Hand-glazed brioche doughnuts with colorful toppings.", price: "$24", img: doughnuts },
  { id: 5, name: "Classic Cookie Box", desc: "Freshly baked chocolate chip and sugar cookies.", price: "$28", img: cookies },
  { id: 6, name: "Sourdough Loaf", desc: "Rustic artisan bread with a perfect crust and crumb.", price: "$12", img: artisanBread },
  { id: 7, name: "Butter Croissants", desc: "Golden, flaky, traditional French croissants (Box of 4).", price: "$18", img: croissants },
  { id: 8, name: "French Pastries", desc: "Assortment of fine eclairs and fruit tarts.", price: "$42", img: pastries },
];

export function Products() {
  return (
    <section id="menu" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Menu</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our Bestsellers</h3>
          <p className="text-muted-foreground text-lg">
            Discover our most loved creations, baked fresh daily with premium ingredients and uncompromising attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-border"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold text-foreground shadow-sm">
                  {product.price}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h4 className="font-serif text-xl font-bold text-foreground mb-2 line-clamp-1">{product.name}</h4>
                <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-2">
                  {product.desc}
                </p>
                <Button className="w-full gap-2 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
