import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/home/CTASection";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import stairsImg from "@/assets/stairs-service.jpg";

const features = [
  "Custom Staircase Design",
  "Wood, Glass & Metal Railings",
  "Floating Staircases",
  "Spiral Staircase Installation",
  "Balustrade & Handrail Systems",
  "Staircase Renovation & Refinishing",
  "3D Staircase Visualization",
  "Code-Compliant Construction",
];

const ServiceStairs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-charcoal relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={stairsImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-charcoal/80" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="font-heading text-xs tracking-[0.4em] uppercase text-gold">Staircase Solutions</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-warm-white mt-4 mb-6">
                Custom Staircase{" "}
                <span className="text-gradient-gold">Design & Installation</span>
              </h1>
              <p className="text-warm-white/60 text-lg leading-relaxed">
                Transform your home with a stunning staircase that combines safety, style, and expert craftsmanship.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <img src={stairsImg} alt="Custom staircase installation" className="rounded-lg w-full" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">What We Offer</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're building new or renovating, our staircase solutions range from classic wooden designs to modern floating stairs with glass railings — all built to code and designed to impress.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                      <span className="text-sm text-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceStairs;
