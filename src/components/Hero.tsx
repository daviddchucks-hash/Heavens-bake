import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/images/hero.webp";

export function Hero() {
  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToOrder = () => {
    document.querySelector("#order")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden py-28 sm:py-32 lg:h-[100dvh] lg:min-h-[640px] lg:py-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Professional bakery interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center text-white sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur-md sm:mb-6 sm:px-4 sm:text-sm"
          >
            Est. 2010
          </motion.div>
          
          <h1 className="mb-4 font-serif text-4xl font-bold leading-[1.08] text-white drop-shadow-lg sm:mb-6 sm:text-5xl md:text-7xl lg:text-8xl">
            Freshly Baked<br />
            <span className="text-primary italic">Happiness</span><br />
            Every Day
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-base font-light text-white/90 drop-shadow-md sm:mb-10 sm:text-lg md:text-xl">
            Artisan breads, decadent pastries, and custom cakes made with love. Step into a world of warm golden crusts and sweet moments.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={scrollToOrder}
              className="h-12 w-full rounded-full border-none bg-primary px-6 text-base text-primary-foreground hover:bg-primary/90 sm:h-14 sm:w-auto sm:px-8 sm:text-lg"
            >
              Order Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToMenu}
              className="h-12 w-full rounded-full border-white/30 bg-white/10 px-6 text-base text-white backdrop-blur-sm hover:bg-white/20 sm:h-14 sm:w-auto sm:px-8 sm:text-lg"
            >
              View Menu
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-white/70 sm:bottom-8 sm:gap-2 lg:bottom-10"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
