import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import logo from "../assets/logo.svg";

const Hero = () => {
  // Premium animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
        duration: 1.2,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const textVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  // Luxury product showcase items with real product images
  const showcaseItems = [
    {
      id: 1,
      name: "Diamond Earrings",
      x: "15%",
      y: "25%",
      scale: 0.8,
      bgColor: "bg-[#FFD700]/20",
      image: "data:image/jpeg;base64,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"
    },
    {
      id: 2,
      name: "Luxury Serum",
      x: "75%",
      y: "15%",
      scale: 1,
      bgColor: "bg-[#FF6B6B]/20",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b"
    },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden pt-20"> {/* Added pt-20 for navbar spacing */}
      {/* Premium background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
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
              rotate: Math.random() * 360
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100 + 50}%`,
              opacity: [0, 0.1, 0],
              rotate: Math.random() * 360 + 180
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              delay: Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className={`absolute w-32 h-32 rounded-full mix-blend-overlay blur-lg ${
              i % 3 === 0 ? 'bg-[#FFD700]/30' :
              i % 3 === 1 ? 'bg-[#FF6B6B]/30' : 'bg-[#00796B]/30'
            }`}
          />
        ))}
      </div>

      {/* Luxury product showcase */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        {showcaseItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: item.id * 0.4,
              ease: [0.6, 0.05, 0.01, 0.9]
            }}
            className={`absolute ${item.bgColor} rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden`}
            style={{
              width: '300px',
              height: '300px',
              left: item.x,
              top: item.y,
              scale: item.scale
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

      {/* Main content */}
      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Luxury logo */}
        <motion.div
          variants={textVariants}
          className="mb-8 md:mb-12"
        >
          <img
            className="h-20 md:h-24 mx-auto"
          />
        </motion.div>

        {/* Headline */}
        <motion.div variants={textVariants} className="mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white font-serif leading-tight">
            <span className="block">Curated Elegance</span>
            <span className="text-[#FF6B6B] font-light italic">for the Discerning Woman</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={textVariants}
          className="text-xl md:text-2xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Discover handpicked luxury accessories, premium skincare, and designer footwear
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={textVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
        >
          <Link
            to="/products"
            className="relative overflow-hidden group px-8 py-4 rounded-full bg-[#1a1a1a] text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <span className="relative z-10 flex items-center justify-center">
              Shop The Collection
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FF6B6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link
            to="/categories"
            className="px-8 py-4 rounded-full bg-transparent text-white font-medium text-lg border-2 border-white hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span className="flex items-center justify-center">
              Explore Categories
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </motion.div>

        {/* Quick categories */}
        <motion.div
          variants={textVariants}
          className="mt-10 md:mt-14 flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
        >
          {['Accessories', 'Skincare', 'Footwear', 'New Arrivals'].map((category) => (
            <Link
              key={category}
              to={`/products?category=${category.toLowerCase().replace(' ', '-')}`}
              className="px-5 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all text-sm font-medium backdrop-blur-sm border border-white/10 hover:border-white/20"
            >
              {category}
            </Link>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-white/80 text-sm mb-2">Scroll to Explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/50 relative">
            <motion.div
              animate={{
                y: [0, 12, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-2 bg-white rounded-full absolute top-2 left-1/2 -translate-x-1/2"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Luxury overlay texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/silk.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
    </section>
  );
};

export default Hero;