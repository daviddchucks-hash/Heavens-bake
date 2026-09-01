import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, GraduationCap, CheckCircle2, ChevronRight, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

import croissantsImg from "@/assets/images/croissants.webp";
import artisanBreadImg from "@/assets/images/artisan-bread.webp";
import weddingCakeImg from "@/assets/images/wedding-cake.webp";

const classes = [
  {
    id: "croissant-mastery",
    title: "French Pastry & Croissant Masterclass",
    level: "Beginner to Intermediate",
    duration: "4 Hours",
    groupSize: "Max 8 Students",
    price: "$120",
    date: "Saturdays @ 10:00 AM",
    description: "Master the art of laminated dough, butter temperature control, and shaping classic French croissants, pain au chocolat, and danishes.",
    image: croissantsImg,
    highlights: ["Hands-on dough lamination", "Take home 12 fresh pastries", "Recipe booklet & apron included", "Complimentary coffee & tasting"]
  },
  {
    id: "artisan-sourdough",
    title: "Artisan Sourdough Bread Fundamentals",
    level: "All Skill Levels",
    duration: "5 Hours",
    groupSize: "Max 10 Students",
    price: "$135",
    date: "Sundays @ 11:00 AM",
    description: "Learn sourdough starter creation, hydration ratios, bulk fermentation, dough scoring, and baking in Dutch ovens for rustic golden crusts.",
    image: artisanBreadImg,
    highlights: ["Take home 100-year starter culture", "Bake 2 artisan loaves", "Scoring knife & proofing basket", "Fermentation guide"]
  },
  {
    id: "cake-decorating",
    title: "Modern Cake Decorating & Fondant",
    level: "Intermediate",
    duration: "3.5 Hours",
    groupSize: "Max 6 Students",
    price: "$110",
    date: "Thursdays @ 5:30 PM",
    description: "Learn smooth buttercream crumb-coating, piping techniques, wafer paper florals, and color blending for stunning celebration cakes.",
    image: weddingCakeImg,
    highlights: ["Individual 6-inch cake provided", "Professional piping nozzle set", "Edible gold leaf application", "Boxed cake to take home"]
  }
];

export function PastryClass() {
  const { toast } = useToast();
  const [selectedClass, setSelectedClass] = useState<typeof classes[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleBookNow = (pastryClass: typeof classes[0]) => {
    setSelectedClass(pastryClass);
    setIsDialogOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingEmail) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email to reserve your spot.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Class Reservation Received! 🎓",
      description: `Thank you ${bookingName}! We've reserved your spot for "${selectedClass?.title}". Confirmation details sent to ${bookingEmail}.`,
    });

    setIsDialogOpen(false);
    setBookingName("");
    setBookingEmail("");
    setBookingPhone("");
    setSelectedDate("");
  };

  return (
    <section id="classes" className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-4"
          >
            <GraduationCap className="w-4 h-4" />
            Hands-on Academy
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Take a Pastry & Baking Class
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Unleash your inner baker with expert guidance from our master pastry chefs. Small class sizes ensure personalized instruction in a fun, state-of-the-art kitchen environment.
          </motion.p>
        </div>

        {/* Class Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {classes.map((cls, idx) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-card border border-border rounded-3xl overflow-hidden shadow-lg flex flex-col hover:shadow-2xl hover:border-primary/40 transition-all duration-300 group"
            >
              {/* Image Banner */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-foreground shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  {cls.level}
                </div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground font-bold px-4 py-1.5 rounded-full text-lg shadow-md">
                  {cls.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {cls.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {cls.description}
                  </p>

                  {/* Class Metadata */}
                  <div className="grid grid-cols-2 gap-3 py-4 border-y border-border mb-6 text-xs text-foreground/80">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary shrink-0" />
                      <span>{cls.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary shrink-0" />
                      <span>{cls.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <Calendar className="w-4 h-4 text-primary shrink-0" />
                      <span>{cls.date}</span>
                    </div>
                  </div>

                  {/* Class Highlights */}
                  <div className="space-y-2 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">What's Included:</span>
                    {cls.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => handleBookNow(cls)}
                  className="w-full h-12 text-base font-bold rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-md flex items-center justify-center gap-2"
                >
                  Book Pastry Class
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-card border border-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-foreground">Custom Private & Corporate Baking Classes</h4>
              <p className="text-muted-foreground text-sm">Looking for a unique team-building activity or private celebration? We design bespoke masterclasses tailored for groups up to 20 people.</p>
            </div>
          </div>
          <a href="#contact" className="shrink-0">
            <Button variant="outline" className="rounded-full px-6 h-12 font-bold">
              Inquire Private Event
            </Button>
          </a>
        </motion.div>

      </div>

      {/* Booking Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] rounded-3xl border border-border bg-card p-6 md:p-8">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl font-bold text-foreground">
              Reserve Your Spot
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              {selectedClass?.title} ({selectedClass?.price})
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleFormSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="Jane Doe"
                value={bookingName}
                onChange={(e) => setBookingName(e.target.value)}
                required
                className="bg-background rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="jane@example.com"
                value={bookingEmail}
                onChange={(e) => setBookingEmail(e.target.value)}
                required
                className="bg-background rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={bookingPhone}
                onChange={(e) => setBookingPhone(e.target.value)}
                className="bg-background rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="session">Preferred Session Schedule</Label>
              <Select value={selectedDate} onValueChange={setSelectedDate}>
                <SelectTrigger id="session" className="bg-background rounded-xl">
                  <SelectValue placeholder="Select upcoming date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this-weekend">Next Session ({selectedClass?.date})</SelectItem>
                  <SelectItem value="next-weekend">In 2 Weeks</SelectItem>
                  <SelectItem value="next-month">Next Month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <Button type="button" variant="ghost" onClick={() => setIsDialogOpen(false)} className="rounded-xl">
                Cancel
              </Button>
              <Button type="submit" className="rounded-xl font-bold px-6">
                Confirm Reservation
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
