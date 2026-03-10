import { motion } from "framer-motion";

const GalleryGrid = ({ items, onItemClick }) => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {items.map((item:any, index:number) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: 1,
                y: [0, -12, 0],
              }}
              transition={{
                duration: 2,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              onClick={() => onItemClick?.(item)}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500"
            >

              {/* IMAGE */}
              {item.type === "image" && (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}

              {/* VIDEO */}
              {item.type === "video" && (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}

              {/* Video Icon */}
              {item.type === "video" && (
                <div className="absolute top-3 right-3 bg-black/60 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold transform translate-y-6 group-hover:translate-y-0 transition duration-300">
                  {item.title}
                </h3>
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default GalleryGrid;