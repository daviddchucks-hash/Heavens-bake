import { motion } from "framer-motion";
import { MousePointerClick, PhoneCall, ChefHat, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Choose Product",
    desc: "Browse our extensive online menu and pick your favorites."
  },
  {
    icon: PhoneCall,
    title: "Place Order",
    desc: "Complete your order easily online or call us directly."
  },
  {
    icon: ChefHat,
    title: "Baking Process",
    desc: "Our master bakers craft your order from scratch with love."
  },
  {
    icon: PackageCheck,
    title: "Delivery",
    desc: "Fresh delivery straight to your door, or pick up in store."
  }
];

export function OrderProcess() {
  return (
    <section id="order" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Simple & Fast</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">How It Works</h3>
          <p className="text-muted-foreground text-lg">
            From our oven to your table in four simple steps. We make it incredibly easy to enjoy premium baked goods.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-border -translate-y-1/2 z-0">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-primary origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.3 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shadow-lg border-2 border-background z-20">
                  {idx + 1}
                </div>
                
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-background border-4 border-background shadow-xl flex items-center justify-center mb-6 relative group">
                  <div className="absolute inset-0 rounded-full bg-secondary/50 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <step.icon className="w-10 h-10 text-primary relative z-10" />
                </div>
                
                <h4 className="font-serif text-2xl font-bold text-foreground mb-3">{step.title}</h4>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
