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
    <section id="classes" className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
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
            className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl"
          >
            Take a Pastry & Baking Class
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-muted-foreground sm:text-lg"
          >
            Unleash your inner baker with expert guidance from our master pastry chefs. Small class sizes ensure personalized instruction in a fun, state-of-the-art kitchen environment.
          </motion.p>
        </div>

        {/* Class Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {classes.map((cls, idx) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-300 hover:border-primary/40 hover:shadow-2xl"
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
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 md:p-8">
                <div>
                   <h3 className="mb-3 font-serif text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-2xl">
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
         className="mt-12 flex flex-col gap-5 rounded-3xl border border-border bg-card p-5 shadow-sm sm:mt-16 sm:gap-6 sm:p-8 md:flex-row md:items-center md:justify-between"
        >
           <div className="flex min-w-0 items-start gap-4 sm:items-center">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div>
               <h4 className="font-serif text-lg font-bold text-foreground sm:text-xl">Custom Private & Corporate Baking Classes</h4>
              <p className="text-muted-foreground text-sm">Looking for a unique team-building activity or private celebration? We design bespoke masterclasses tailored for groups up to 20 people.</p>
            </div>
          </div>
           <a href="#contact" className="w-full shrink-0 md:w-auto">
             <Button variant="outline" className="h-12 w-full rounded-full px-6 font-bold md:w-auto">
              Inquire Private Event
            </Button>
          </a>
        </motion.div>

      </div>

      {/* Booking Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
         <DialogContent className="max-h-[90vh] w-[calc(100%-2rem)] max-w-[500px] overflow-y-auto rounded-3xl border border-border bg-card p-5 sm:p-6 md:p-8">
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

             <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-end">
               <Button type="button" variant="ghost" onClick={() => setIsDialogOpen(false)} className="w-full rounded-xl sm:w-auto">
                Cancel
              </Button>
               <Button type="submit" className="w-full rounded-xl px-6 font-bold sm:w-auto">
                Confirm Reservation
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
