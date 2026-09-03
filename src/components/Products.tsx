import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

import scotchEggs from "@/assets/images/bummies-scotch-eggs.webp";
import wholewheatBread from "@/assets/images/bummies-wholewheat.webp";
import cinnamonRolls from "@/assets/images/bummies-cinnamon-rolls.webp";
import pastryRolls from "@/assets/images/bummies-pastry-rolls.webp";
import bakeryBun from "@/assets/images/bummies-bun.webp";
import breadShelf from "@/assets/images/bummies-bread-shelf.webp";
import sandwiches from "@/assets/images/bummies-sandwiches.webp";

const products = [
  { id: 1, name: "Scotch Egg Platter", desc: "Crisp, golden Scotch eggs prepared for sharing.", price: "$24", img: scotchEggs },
  { id: 2, name: "Whole Wheat Bread", desc: "Soft, wholesome sliced bread for everyday breakfasts.", price: "$8", img: wholewheatBread },
  { id: 3, name: "Cinnamon Swirls", desc: "Soft baked rolls with warm cinnamon through every layer.", price: "$18", img: cinnamonRolls },
  { id: 4, name: "Golden Pastry Rolls", desc: "Flaky savoury rolls baked until beautifully golden.", price: "$22", img: pastryRolls },
  { id: 5, name: "Fresh Bakery Bun", desc: "Pillowy, oven-fresh bun with a rich golden finish.", price: "$10", img: bakeryBun },
  { id: 6, name: "Daily Bread Selection", desc: "A freshly stocked selection from our bakery shelves.", price: "$12", img: breadShelf },
  { id: 7, name: "Savoury Sandwiches", desc: "Hand-packed sandwiches made fresh for quick lunches.", price: "$16", img: sandwiches },
  { id: 8, name: "Pastry Roll Box", desc: "A generous box of flaky golden rolls for the table.", price: "$30", img: pastryRolls },
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
