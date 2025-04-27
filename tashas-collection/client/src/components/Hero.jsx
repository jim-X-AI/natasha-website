import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
        duration: 1.2,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const textVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  // Product showcase items
  const showcaseItems = [
    {
      id: 1,
      name: "Diamond Earrings",
      x: "15%",
      y: "25%",
      scale: 0.8,
      bgColor: "bg-[#FFD700]/20",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 2,
      name: "Luxury Serum",
      x: "75%",
      y: "15%",
      scale: 1,
      bgColor: "bg-[#FF6B6B]/20",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0,
              rotate: Math.random() * 360,
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100 + 50}%`,
              opacity: [0, 0.1, 0],
              rotate: Math.random() * 360 + 180,
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              delay: Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className={`absolute w-32 h-32 rounded-full mix-blend-overlay blur-lg ${
              i % 3 === 0
                ? "bg-[#FFD700]/30"
                : i % 3 === 1
                ? "bg-[#FF6B6B]/30"
                : "bg-[#00796B]/30"
            }`}
          />
        ))}
      </div>

      {/* Product showcase */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        {showcaseItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: item.id * 0.4,
              ease: [0.6, 0.05, 0.01, 0.9],
            }}
            className={`absolute ${item.bgColor} rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden`}
            style={{
              width: "300px",
              height: "300px",
              left: item.x,
              top: item.y,
              scale: item.scale,
              transformOrigin: "center",
            }}
            whileHover={{ scale: 1.08, zIndex: 10 }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-white font-medium text-sm">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Responsive adjustments for mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .absolute {
            width: 200px !important;
            height: 200px !important;
            left: 50% !important;
            top: unset !important;
            transform: translateX(-50%) translateY(0) !important;
            margin-top: ${showcaseItems.findIndex((item) => item.id === 1) * 220}px;
          }
          .absolute:nth-child(2) {
            margin-top: ${showcaseItems.findIndex((item) => item.id === 2) * 220}px;
          }
        }
      `}</style>

      {/* Main content */}
      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.div variants={textVariants} className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif leading-tight">
            <span className="block">Curated Elegance</span>
            <span className="text-[#FF6B6B] font-light italic">
              for the Discerning Woman
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={textVariants}
          className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-light"
        >
          Discover handpicked luxury accessories, premium skincare, and designer
          footwear
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={textVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
        >
          <Link
            to="/products"
            className="relative overflow-hidden group px-6 py-3 md:px-8 md:py-4 rounded-full bg-[#1a1a1a] text-white font-medium text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center">
              Shop The Collection
              <svg
                className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FF6B6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link
            to="/categories"
            className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-transparent text-white font-medium text-base md:text-lg border-2 border-white hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span className="flex items-center justify-center">
              Explore Categories
              <svg
                className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </Link>
        </motion.div>

        {/* Quick categories */}
        <motion.div
          variants={textVariants}
          className="mt-8 md:mt-12 lg:mt-14 flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
        >
          {["Accessories", "Skincare", "Footwear", "New Arrivals"].map(
            (category) => (
              <Link
                key={category}
                to={`/products?category=${category.toLowerCase().replace(" ", "-")}`}
                className="px-4 py-1.5 md:px-5 md:py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all text-xs md:text-sm font-medium backdrop-blur-sm border border-white/10 hover:border-white/20"
              >
                {category}
              </Link>
            )
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-white/80 text-xs md:text-sm mb-2">
            Scroll to Explore
          </span>
          <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-white/50 relative">
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 bg-white rounded-full absolute top-1.5 md:top-2 left-1/2 -translate-x-1/2"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Overlay texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/silk.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
    </section>
  );
};

export default Hero;