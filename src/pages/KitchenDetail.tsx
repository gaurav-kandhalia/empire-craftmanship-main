import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { kitchenData } from "@/data/kitchenData";
import { motion } from "framer-motion";
import kitchenImg from "@/assets/kitchen-service.jpg";
import HeroSection from "@/components/HeroSection";

const KitchenDetail = () => {
    const { slug } = useParams();
    const data = kitchenData[slug];

    if (!data) {
        return <div className="p-20 text-center">Page Not Found</div>;
    }

    return (
        <div className="min-h-screen bg-background">

            <Header />

            {/* HERO SECTION */}

       import HeroSection from "@/components/HeroSection";

<HeroSection
  label="Kitchen Portfolio"
  title={data.title}
  description={data.description}
  image={"/staircase/images/stairs.png"}
/>

            {/* DESCRIPTION CARD */}



            {/* GALLERY */}

            <section className="py-24 container mx-auto px-6  my-auto  ">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {data.images.map((img: any, index: number) => (
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

export default KitchenDetail;

