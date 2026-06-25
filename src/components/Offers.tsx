import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Gift, CakeSlice, Award } from "lucide-react";

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
    <section id="offers" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary/90 to-primary text-primary-foreground p-8 md:p-12 shadow-xl mb-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80')] opacity-10 mix-blend-overlay bg-cover bg-center" />
          
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-md text-sm font-bold tracking-wider uppercase mb-4">
              Limited Time Offer
            </span>
            <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Summer Bakery Festival
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-0">
              Celebrate the season with our exclusive discounts on all large orders and custom event cakes.
            </p>
          </div>

          <div className="relative z-10 flex gap-4 text-center">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.minutes },
              { label: 'Secs', value: timeLeft.seconds },
            ].map((time, idx) => (
              <div key={idx} className="bg-background/10 backdrop-blur-md border border-white/20 rounded-xl p-3 md:p-4 min-w-[70px] md:min-w-[80px]">
                <div className="text-2xl md:text-4xl font-bold font-mono">{time.value.toString().padStart(2, '0')}</div>
                <div className="text-xs uppercase tracking-wider mt-1 opacity-80">{time.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3 Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              className={`relative p-8 rounded-2xl ${offer.color} border border-border hover:shadow-lg transition-shadow`}
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
