import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X } from "lucide-react";
import breadShelf from "@/assets/images/bummies-bread-shelf.webp";
import scotchEggs from "@/assets/images/bummies-scotch-eggs.webp";
import pastryRolls from "@/assets/images/bummies-pastry-rolls.webp";
import cinnamonRolls from "@/assets/images/bummies-cinnamon-rolls.webp";
import wholewheatBread from "@/assets/images/bummies-wholewheat.webp";
import sandwiches from "@/assets/images/bummies-sandwiches.webp";
import bakeryBun from "@/assets/images/bummies-bun.webp";

const galleryImages = [
  breadShelf,
  scotchEggs,
  pastryRolls,
  cinnamonRolls,
  wholewheatBread,
  sandwiches,
  bakeryBun,
];

export function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Portfolio</h2>
          <h3 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">Our Gallery</h3>
          <p className="text-base text-muted-foreground sm:text-lg">
            A visual journey through our daily creations. Every piece is a unique work of edible art.
          </p>
        </div>

        {/* Masonry Grid via CSS columns */}
        <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImg(src)}
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-auto rounded-2xl group-hover:scale-105 transition-transform duration-700 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-10 h-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute right-3 top-3 p-2 text-white/70 hover:text-white sm:right-6 sm:top-6"
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImg}
              alt="Lightbox"
              className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl sm:max-h-[90vh]"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
