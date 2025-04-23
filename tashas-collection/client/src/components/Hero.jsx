import { Link } from "react-router-dom";
import { motion, useTransform, useScroll } from "framer-motion";
import logo from '../assets/logo.svg';

const Hero = () => {
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
        duration: 0.8
      }
    }
  };

  const textVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  // Floating animation for decorative elements
  const floatingVariants = {
    float: {
      y: ["0%", "-10%", "0%"],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/95 to-accent-yellow z-0" />

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100,
              opacity: 0,
              rotate: Math.random() * 360
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 + 50,
              opacity: [0, 0.1, 0],
              rotate: Math.random() * 360
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              delay: Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className={`absolute ${i % 2 === 0 ? 'left-1/4' : 'right-1/4'} w-32 h-32 rounded-full mix-blend-overlay blur-lg ${
              i % 3 === 0 ? 'bg-accent-green' :
              i % 3 === 1 ? 'bg-accent-pink' : 'bg-accent-yellow'
            }`}
            style={{
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`
            }}
          />
        ))}
      </div>

      {/* Luxury product showcase - Parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { x: '20%', y: '30%', scale: 0.8, color: 'bg-accent-green/20' },
          { x: '70%', y: '20%', scale: 1, color: 'bg-accent-pink/20' },
          { x: '40%', y: '60%', scale: 0.9, color: 'bg-accent-yellow/20' }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.3 }}
            className={`absolute ${item.color} rounded-xl shadow-2xl border border-white/20 backdrop-blur-sm`}
            style={{
              width: '240px',
              height: '240px',
              left: item.x,
              top: item.y,
              scale: item.scale
            }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <div className="w-full h-full bg-white/80 rounded-lg" />
          </motion.div>
        ))}
      </div>

      {/* Main content with refined typography */}
      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Luxury logo reveal */}
        <motion.div
          variants={fadeIn}
          className="mb-8 md:mb-12"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={logo}
            alt="Tasha's Collection"
            className="h-20 md:h-24 mx-auto drop-shadow-xl"
          />
        </motion.div>

        {/* Headline with elegant typography */}
        <motion.div variants={textVariants} className="mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white font-serif leading-tight tracking-tight">
            <span className="block">Curated Elegance</span>
            <span className="text-accent-pink font-light italic">for the Discerning Woman</span>
          </h1>
        </motion.div>

        {/* Subheading with refined spacing */}
        <motion.p
          variants={textVariants}
          className="text-xl md:text-2xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Experience the pinnacle of luxury with our hand-selected collection of premium accessories,
          exquisite skincare, and designer footwear
        </motion.p>

        {/* Premium CTA buttons */}
        <motion.div
          variants={textVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
        >
          <Link
            to="/products"
            className="relative overflow-hidden group px-8 py-4 rounded-full bg-gray-900 text-white font-medium text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span className="relative z-10">Shop The Collection</span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
          <Link
            to="/categories"
            className="px-8 py-4 rounded-full bg-transparent text-white font-medium text-lg border-2 border-white hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Categories
          </Link>
        </motion.div>

        {/* Quick categories with refined styling */}
        <motion.div
          variants={fadeIn}
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

        {/* Elegant scroll indicator */}
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
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/silk.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
    </section>
  );
};

export default Hero;