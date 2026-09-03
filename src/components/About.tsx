import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Clock, Cake, ShoppingBag } from "lucide-react";
import aboutImg from "@/assets/images/about.webp";

const stats = [
  { label: "Happy Customers", value: 10000, suffix: "+", icon: Users },
  { label: "Years Experience", value: 14, suffix: "", icon: Clock },
  { label: "Cakes Delivered", value: 50000, suffix: "+", icon: Cake },
  { label: "Daily Orders", value: 200, suffix: "+", icon: ShoppingBag },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const incrementTime = (duration / end) * 10;
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 50);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-serif font-bold text-foreground">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Story</h2>
              <h3 className="mb-5 font-serif text-3xl font-bold text-foreground sm:mb-6 sm:text-4xl md:text-5xl">
                Baking happiness into every creation since 2010.
              </h3>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  What started as a small neighborhood kitchen has blossomed into a beloved destination for artisan breads and exquisite pastries. At Bummies Bakery, we believe that the secret to extraordinary flavor lies in patience, passion, and the finest ingredients.
                </p>
                <p>
                  Every morning before the sun rises, our master bakers are already at work—kneading, shaping, and proofing. We honor time-tested traditional methods while embracing creative new flavors to bring you a truly elevated bakery experience.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-border pt-6 sm:gap-8 sm:pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-primary sm:gap-3">
                      <Icon className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <span className="text-xs font-medium uppercase leading-snug tracking-wider text-muted-foreground sm:text-sm">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl shadow-2xl lg:ml-auto">
              <img 
                src={aboutImg} 
                alt="Professional baker" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-2 border-white/20 rounded-2xl m-4 pointer-events-none" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
