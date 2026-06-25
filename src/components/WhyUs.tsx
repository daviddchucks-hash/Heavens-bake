import { motion } from "framer-motion";
import { Leaf, Award, Truck, Heart, Palette, BadgeDollarSign } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    desc: "We source only the finest local and organic ingredients, ensuring every bite is wholesome and flavorful."
  },
  {
    icon: Award,
    title: "Master Bakers",
    desc: "Our team has 15+ years of experience crafting perfection in traditional and modern baking."
  },
  {
    icon: Truck,
    title: "Swift Delivery",
    desc: "Hot and fresh to your door in under 2 hours, packaged carefully to preserve pristine condition."
  },
  {
    icon: Heart,
    title: "Premium Quality",
    desc: "Every single item is made from scratch daily with uncompromising standards and genuine love."
  },
  {
    icon: Palette,
    title: "Custom Designs",
    desc: "Bespoke cake and pastry creations tailored specifically to your vision and special events."
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    desc: "Experience true luxury taste and presentation without the exorbitant luxury price tag."
  }
];

export function WhyUs() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">The Difference</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Why Heavens Bake?</h3>
          <p className="text-muted-foreground text-lg">
            We don't just bake; we craft experiences. Here's why our community chooses us for their most important moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 shadow-sm border border-primary/10">
                <feature.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="font-serif text-xl font-bold text-foreground mb-3">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
