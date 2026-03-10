import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { stairsData } from "@/data/stairCaseData";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";

const StairsDetail = () => {
  const { slug } = useParams();
  const data = stairsData[slug];

  if (!data) {
    return <div className="p-20 text-center">Page Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-background">

      <Header />

      <HeroSection
        label="Stairs Portfolio"
        title={data.title}
        description={data.description}
        image="/staircase/images/stairs.png"
      />

     

      <section className="py-24 container mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {data.images.map((img:any, index:number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={img}
                alt={data.title}
                className="w-full h-[320px] object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}

        </div>

      </section>

      <Footer />

    </div>
  );
};

export default StairsDetail;