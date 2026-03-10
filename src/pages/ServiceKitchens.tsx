import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import kitchenImg from "@/assets/kitchen-service.jpg";
import { useNavigate } from "react-router-dom";
import GalleryGrid from "@/components/GalleryGrid";

const galleryItems = [
  {
    title: "Modern Kitchen Design",
    type: "image",
    src: "/kitchen/images/kitchen1.jpeg",
    link: "/kitchen/modern-design",
  },
  {
    title: "Luxury Cabinet Installation",
    type: "video",
    src: "/kitchen/videos/kitchen1.mp4",
    link: "/kitchen/cabinet-installation",
  },
  {
    title: "Elegant Kitchen Island",
    type: "image",
    src: "/kitchen/images/kitchen2.jpeg",
    link: "/kitchen/kitchen-island",
  },
  {
    title: "Premium Marble Countertops",
    type: "video",
    src: "/kitchen/videos/kitchen2.mp4",
    link: "/kitchen/marble-countertops",
  },
  {
    title: "Minimalist Cabinet Design",
    type: "image",
    src: "/kitchen/images/kitchen3.jpeg",
    link: "/kitchen/minimal-cabinets",
  },
  {
    title: "Complete Kitchen Renovation",
    type: "video",
    src: "/kitchen/videos/kitchen3.mp4",
    link: "/kitchen/renovation",
  },
];



const ServiceKitchens = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO SECTION */}

      <section className="pt-32 pb-24 bg-charcoal relative overflow-hidden">

        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          className="absolute inset-0 opacity-20"
        >
          <img
            src={kitchenImg}
            alt="Kitchen background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-charcoal/80" />

        {/* Floating glow */}
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-150px] top-[-150px] w-[400px] h-[400px] bg-gold/10 blur-3xl rounded-full"
        />

        <div className="container mx-auto px-4 lg:px-8 relative">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >

            <span className="font-heading text-xs uppercase text-gold tracking-[0.4em]">
              Kitchen Solutions
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-warm-white mt-4 mb-6">
              Custom Kitchen{" "}
              <span className="text-gradient-gold relative inline-block overflow-hidden">
                Cabinets & Design

                {/* shimmer */}
                <motion.span
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </span>
            </h1>

            <p className="text-warm-white/60 text-lg leading-relaxed max-w-xl">
              From sleek modern kitchens to timeless classic designs, we create
              custom cabinetry and complete kitchen solutions tailored to your
              lifestyle.
            </p>

          </motion.div>

        </div>
      </section>

      {/* GALLERY SECTION */}

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">

       

          {/* Gallery Grid */}

<GalleryGrid items={galleryItems} onItemClick={(item:any) => navigate(item.link)}/>
        

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceKitchens;


  // <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

  //           {galleryItems.map((item, index) => (

  //             <motion.div
  //               key={index}
  //               initial={{ opacity: 0, y: 40 }}
  //               animate={{
  //                 opacity: 1,
  //                 y: [0, -12, 0],
  //               }}
  //               transition={{
  //                 duration: 2,
  //                 delay: index * 0.2,
  //                 ease: "easeInOut",
  //               }}
  //               whileHover={{
  //                 scale: 1.05,
  //                 y: -10,
  //               }}
  //               onClick={() => navigate(item.link)}
  //               className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500"
  //             >

  //               {/* IMAGE */}
  //               {item.type === "image" && (
  //                 <img
  //                   src={item.src}
  //                   alt={item.title}
  //                   className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
  //                 />
  //               )}

  //               {/* VIDEO */}
  //               {item.type === "video" && (
  //                 <video
  //                   src={item.src}
  //                   autoPlay
  //                   muted
  //                   loop
  //                   playsInline
  //                   className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
  //                 />
  //               )}

  //               {/* Video icon */}
  //               {item.type === "video" && (
  //                 <div className="absolute top-3 right-3 bg-black/60 rounded-full p-2">
  //                   <svg
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     className="w-4 h-4 text-white"
  //                     fill="currentColor"
  //                     viewBox="0 0 24 24"
  //                   >
  //                     <path d="M8 5v14l11-7z" />
  //                   </svg>
  //                 </div>
  //               )}

  //               {/* Overlay */}

  //               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

  //                 <h3 className="text-white text-xl font-semibold transform translate-y-6 group-hover:translate-y-0 transition duration-300">
  //                   {item.title}
  //                 </h3>

  //               </div>

  //             </motion.div>

  //           ))}

  //         </div>