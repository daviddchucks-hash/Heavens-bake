import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Gift, CakeSlice, Award } from "lucide-react";
import breadShelfImg from "@/assets/images/bummies-bread-shelf.webp";

export function Offers() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="offers" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-10 flex flex-col gap-8 overflow-hidden rounded-3xl bg-gradient-to-r from-primary/90 to-primary p-5 text-primary-foreground shadow-xl sm:mb-16 sm:p-8 md:flex-row md:items-center md:justify-between md:p-12"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
            style={{ backgroundImage: `url(${breadShelfImg})` }}
          />
          
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-md text-sm font-bold tracking-wider uppercase mb-4">
              Limited Time Offer
            </span>
            <h3 className="mb-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
              Summer Bakery Festival
            </h3>
            <p className="text-base text-primary-foreground/90 sm:text-lg">
              Celebrate the season with our exclusive discounts on all large orders and custom event cakes.
            </p>
          </div>

          <div className="relative z-10 grid w-full max-w-sm grid-cols-4 gap-2 text-center sm:gap-4 md:w-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.minutes },
              { label: 'Secs', value: timeLeft.seconds },
            ].map((time, idx) => (
              <div key={idx} className="min-w-0 rounded-xl border border-white/20 bg-background/10 p-2 backdrop-blur-md sm:p-3 md:min-w-[80px] md:p-4">
                <div className="font-mono text-xl font-bold sm:text-2xl md:text-4xl">{time.value.toString().padStart(2, '0')}</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider opacity-80 sm:text-xs">{time.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3 Offer Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-8">
          {[
            {
              icon: CakeSlice,
              title: "Weekend Special",
              desc: "20% off all whole cakes ordered for weekend pickup or delivery.",
              badge: "20% OFF",
              color: "bg-accent/30"
            },
            {
              icon: Gift,
              title: "Birthday Bundle",
              desc: "Get a free box of 6 cupcakes with any custom cake order over $80.",
              badge: "FREE GIFT",
              color: "bg-secondary/50"
            },
            {
              icon: Award,
              title: "Loyalty Rewards",
              desc: "Earn points on every purchase. Redeem for free treats and coffee.",
              badge: "JOIN NOW",
              color: "bg-muted"
            }
          ].map((offer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`relative rounded-2xl border border-border p-5 transition-shadow hover:shadow-lg sm:p-8 ${offer.color}`}
            >
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                {offer.badge}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-background shadow-sm flex items-center justify-center text-primary mb-6">
                <offer.icon className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-foreground mb-3">{offer.title}</h4>
              <p className="text-muted-foreground">{offer.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
