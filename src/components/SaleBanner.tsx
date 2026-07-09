import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "2349036895700";
const WHATSAPP_MESSAGE = "Hi! I'm interested in buying the Heavens Bake website.";

export function SaleBanner() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
      target="_blank"
      rel="noreferrer"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-[100] flex h-10 w-full items-center justify-center gap-2 bg-primary px-4 text-center text-xs font-semibold tracking-wide text-primary-foreground shadow-md transition-colors hover:bg-primary/90 sm:text-sm"
      data-testid="banner-for-sale"
    >
      <MessageCircle className="h-4 w-4 shrink-0" />
      <span className="truncate">
        This website is FOR SALE — Contact +234 903 689 5700 on WhatsApp to make it yours
      </span>
    </motion.a>
  );
}
