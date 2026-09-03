import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "London, UK",
    text: "The three-tier wedding cake Bummies Bakery created for us was nothing short of spectacular. Not only was it breathtakingly beautiful with real gold leaf, but the vanilla bean sponge was the best I've ever tasted.",
    rating: 5,
    initials: "SJ"
  },
  {
    id: 2,
    name: "Michael Rossi",
    location: "Kensington",
    text: "I order their artisan sourdough every single week. It has the perfect crust and the crumb is always airy and soft. Truly authentic European baking right here in the city.",
    rating: 5,
    initials: "MR"
  },
  {
    id: 3,
    name: "Elena Silva",
    location: "Notting Hill",
    text: "Their morning pastries transport me straight back to Paris. The croissants are incredibly flaky and buttery. The staff is always so warm and welcoming too!",
    rating: 5,
    initials: "ES"
  },
  {
    id: 4,
    name: "David Chen",
    location: "Chelsea",
    text: "Ordered a custom box of macarons and eclairs for a corporate event. They were an absolute hit. The presentation is as premium as the taste.",
    rating: 5,
    initials: "DC"
  },
  {
    id: 5,
    name: "Aisha Patel",
    location: "Marylebone",
    text: "The birthday bundle offer was fantastic! My daughter loved her rainbow cake, and the free cupcakes were a delightful surprise. You've earned a lifelong customer.",
    rating: 5,
    initials: "AP"
  }
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-accent/20 py-16 sm:py-20 lg:py-24">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Reviews</h2>
          <h3 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">What Our Customers Say</h3>
        </div>

        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative flex min-h-[300px] items-center justify-center rounded-3xl border border-border bg-background/60 p-5 shadow-xl backdrop-blur-xl sm:p-8 md:p-12">
            <Quote className="absolute left-4 top-4 h-12 w-12 text-primary/10 sm:left-8 sm:top-8 sm:h-16 sm:w-16" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="px-7 text-center sm:px-4"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="mb-8 font-serif text-base italic leading-relaxed text-foreground sm:text-xl md:text-2xl">
                  "{testimonials[current].text}"
                </p>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg shadow-inner">
                    {testimonials[current].initials}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-foreground">{testimonials[current].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[current].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <button 
            onClick={prev}
            className="absolute left-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg transition-colors hover:bg-secondary sm:left-0 sm:h-12 sm:w-12 sm:-translate-x-1/2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={next}
            className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg transition-colors hover:bg-secondary sm:right-0 sm:h-12 sm:w-12 sm:translate-x-1/2"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === current ? "bg-primary w-8" : "bg-primary/30"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
