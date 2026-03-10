import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/home/CTASection";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import stairsImg from "@/assets/stairs-service.jpg";
import GalleryGrid from "@/components/GalleryGrid";
import { useNavigate } from "react-router-dom";

const staircaseGalleryItems = [
  {
    title: "Custom Staircase Design",
    type: "image",
    src: "https://graciamakeovers.com/wp-content/uploads/2025/10/IMG_8925-2-scaled.webp",
    link: "/stairs/custom-design",
  },
  {
    title: "Wood, Glass & Metal Railings",
    type: "image",
    src: "https://graciamakeovers.com/wp-content/uploads/2025/10/IMG_8924-2-scaled.webp",
    link: "/stairs/railings",
  },
  {
    title: "Floating Staircases",
    type: "image",
    src: "https://graciamakeovers.com/wp-content/uploads/2025/10/PHOTO-2023-05-16-19-10-22-101-2.webp",
    link: "/stairs/floating-stairs",
  },
  {
    title: "Spiral Staircase Installation",
    type: "image",
    src: "https://graciamakeovers.com/wp-content/uploads/2025/10/IMG_8789-2-scaled.webp",
    link: "/stairs/spiral-staircase",
  },
  {
    title: "Balustrade & Handrail Systems",
    type: "image",
    src: "https://graciamakeovers.com/wp-content/uploads/2025/10/IMG_8792-2-scaled.webp",
    link: "/stairs/balustrade-handrail",
  },
];

const ServiceStairs = () => {

    const navigate = useNavigate();
  
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

      {/* --------------gallery grid-------------- */}
     <GalleryGrid items={staircaseGalleryItems} onItemClick={(item:any) => navigate(item.link)}/>
        

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceStairs;



