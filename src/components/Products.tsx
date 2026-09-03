import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

import weddingCake from "@/assets/images/wedding-cake.webp";
import birthdayCake from "@/assets/images/birthday-cake.webp";
import cupcakes from "@/assets/images/cupcakes.webp";
import doughnuts from "@/assets/images/doughnuts.webp";
import cookies from "@/assets/images/cookies.webp";
import artisanBread from "@/assets/images/artisan-bread.webp";
import croissants from "@/assets/images/croissants.webp";
import pastries from "@/assets/images/pastries.webp";

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
    <section id="menu" className="bg-secondary/30 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Menu</h2>
          <h3 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">Our Bestsellers</h3>
          <p className="text-base text-muted-foreground sm:text-lg">
            Discover our most loved creations, baked fresh daily with premium ingredients and uncompromising attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl"
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
              
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h4 className="mb-2 line-clamp-2 font-serif text-lg font-bold text-foreground sm:text-xl">{product.name}</h4>
                <p className="mb-4 line-clamp-2 flex-1 text-sm text-muted-foreground sm:mb-6">
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
