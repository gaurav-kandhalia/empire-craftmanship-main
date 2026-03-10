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
  image={"/kitchen/images/modernKitchen/modern-kitchen6.png"}
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

    //  <section className="pt-32 pb-24 bg-charcoal relative overflow-hidden">

    //             {/* Background Image */}
    //             <motion.div
    //                 initial={{ scale: 1.1 }}
    //                 animate={{ scale: 1 }}
    //                 transition={{ duration: 6, ease: "easeOut" }}
    //                 className="absolute inset-0 opacity-20"
    //             >
    //                 <img
    //                     src={kitchenImg}
    //                     alt="Kitchen background"
    //                     className="w-full h-full object-cover"
    //                 />
    //             </motion.div>

    //             {/* Dark overlay */}
    //             <div className="absolute inset-0 bg-charcoal/80" />

    //             {/* Floating glow */}
    //             <motion.div
    //                 animate={{ y: [0, -25, 0] }}
    //                 transition={{ duration: 8, repeat: Infinity }}
    //                 className="absolute right-[-150px] top-[-150px] w-[400px] h-[400px] bg-gold/10 blur-3xl rounded-full"
    //             />

    //             <div className="container mx-auto px-4 lg:px-8 relative">

    //                 <div className="grid lg:grid-cols-2 gap-12 items-center">

    //                     {/* LEFT SIDE TEXT */}
    //                     <motion.div
    //                         initial={{ opacity: 0, y: 40 }}
    //                         animate={{ opacity: 1, y: 0 }}
    //                         transition={{ duration: 0.8 }}
    //                         className="max-w-3xl"
    //                     >

    //                         <span className="font-heading text-xs uppercase text-gold tracking-[0.4em]">
    //                             Kitchen Portfolio
    //                         </span>

    //                         <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-warm-white mt-4 mb-6 leading-tight">
    //                             {data.title}
    //                         </h1>

    //                         <motion.p
    //                             initial={{ opacity: 0 }}
    //                             animate={{ opacity: 1 }}
    //                             transition={{ delay: 0.3 }}
    //                             className="text-warm-white/70 text-lg md:text-xl leading-relaxed max-w-2xl"
    //                         >
    //                             {data.description}
    //                         </motion.p>

    //                     </motion.div>

    //                     {/* RIGHT SIDE IMAGE */}

    //                     <motion.div
    //                         initial={{ opacity: 0, x: 80 }}
    //                         animate={{ opacity: 1, x: 0 }}
    //                         transition={{ duration: 0.8 }}
    //                         className="relative"
    //                     >
    //                         <img
    //                             src={'/kitchen/images/modernKitchen/modern-kitchen6.png'}
    //                             alt={data.title}
    //                             className="rounded-xl  object-cover w-full h-[420px] "
    //                         />
    //                     </motion.div>

    //                 </div>

    //             </div>

    //         </section>