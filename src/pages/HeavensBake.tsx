import { ThemeProvider } from "@/components/ThemeProvider";
import { SaleBanner } from "@/components/SaleBanner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Offers } from "@/components/Offers";
import { WhyUs } from "@/components/WhyUs";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { OrderProcess } from "@/components/OrderProcess";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { BackToTop } from "@/components/BackToTop";

export default function HeavensBake() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="heavens-bake-theme">
      <div className="min-h-screen bg-background text-foreground font-sans">
        <LoadingScreen />
        <SaleBanner />
        <div className="h-10" aria-hidden="true" />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Products />
          <Offers />
          <WhyUs />
          <Gallery />
          <Testimonials />
          <OrderProcess />
          <Contact />
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}
