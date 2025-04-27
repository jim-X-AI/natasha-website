import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import Hero from './Hero';
import ProductCard from './ProductCard';
import Navbar from './Navbar'; // Import the Navbar component

// Animation variants
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

const itemVariants = {
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

const HomePage = () => {
  // Featured collections
  const collections = [
    {
      name: "New Arrivals",
      query: "?sort=newest",
      bgColor: "bg-[#FFD700]", // Vibrant gold
      textColor: "text-gray-900",
      image: "bg-[url('https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93')]",
      accentColor: "bg-[#FFC000]"
    },
    {
      name: "Best Sellers",
      query: "?sort=bestselling",
      bgColor: "bg-[#00796B]", // Deep teal
      textColor: "text-white",
      image: "bg-[url('https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0')]",
      accentColor: "bg-[#00695C]"
    },
    {
      name: "Summer Essentials",
      query: "?collection=summer",
      bgColor: "bg-[#FF6B6B]", // Coral pink
      textColor: "text-white",
      image: "bg-[url('https://images.unsplash.com/photo-1551232864-3f0890e580d9')]",
      accentColor: "bg-[#FF5252]"
    }
  ];

  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "24K Gold Earrings",
      description: "Handcrafted luxury earrings with genuine gold plating",
      price: 289.99,
      originalPrice: 349.99,
      category: "Accessories",
      rating: 4.8,
      reviewCount: 142,
      image_url: "https://images.unsplash.com/photo-1611591437281-460914d0f587",
      isNew: true
    },
    {
      id: 2,
      name: "Vitamin C Glow Serum",
      description: "Brightening serum with 20% vitamin C and hyaluronic acid",
      price: 79.99,
      category: "Skincare",
      rating: 4.9,
      reviewCount: 256,
      image_url: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
      isBestSeller: true
    },
    {
      id: 3,
      name: "Designer Leather Tote",
      description: "Premium Italian leather with gold-tone hardware",
      price: 499.99,
      originalPrice: 599.99,
      category: "Accessories",
      rating: 4.7,
      reviewCount: 89,
      image_url: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7"
    },
    {
      id: 4,
      name: "Silk Scarf Collection",
      description: "Luxury hand-rolled silk scarves in seasonal colors",
      price: 229.99,
      category: "Accessories",
      rating: 4.9,
      reviewCount: 187,
      image_url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
      isNew: true
    }
  ];

  return (
    <div className="font-sans antialiased text-gray-900">
      {/* Navbar at the top */}
{/*       <Navbar /> */}
{/*       <div className="pt-20"/>  */}{/* Add this padding to account for navbar height */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* WhatsApp Floating Button */}
        <motion.a
          href="https://wa.me/1234567890"
          className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-40 hover:shadow-3xl transition-all flex items-center justify-center"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
          style={{
            boxShadow: '0 10px 25px -5px rgba(37, 211, 102, 0.3)'
          }}
        >
          <FaWhatsapp size={26} className="drop-shadow-md" />
          <span className="absolute -bottom-8 text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
            Concierge Service
          </span>
        </motion.a>

        {/* Hero Section */}
        <Hero />

        {/* Collections Banner */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FF6B6B]">
                  Our Collections
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Curated selections for the discerning clientele
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {collections.map((collection, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className={`${collection.bgColor} ${collection.textColor} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group relative`}
                >
                  <Link to={`/products${collection.query}`} className="block h-full">
                    <div className={`${collection.image} bg-cover bg-center h-80 md:h-96 relative`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                      <div className="absolute inset-0 flex items-end p-8">
                        <div>
                          <h3 className="text-3xl font-bold mb-2">{collection.name}</h3>
                          <button className={`flex items-center ${collection.textColor} border-2 ${collection.textColor === 'text-white' ? 'border-white' : 'border-gray-900'} px-6 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-all`}>
                            Explore
                            <FaArrowRight className="ml-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Categories Grid - Bold Colors */}
        <section className="py-20 bg-white px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00796B] to-[#6A5ACD]">
                  Shop By Category
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Find exactly what you're looking for
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  name: "Accessories",
                  icon: "💍",
                  link: "/products?category=accessories",
                  bgColor: "bg-[#FFD700]", // Gold
                  textColor: "text-gray-900",
                  hoverColor: "hover:bg-[#FFC000]"
                },
                {
                  name: "Skincare",
                  icon: "🧴",
                  link: "/products?category=skincare",
                  bgColor: "bg-[#FF6B6B]", // Coral
                  textColor: "text-white",
                  hoverColor: "hover:bg-[#FF5252]"
                },
                {
                  name: "Footwear",
                  icon: "👠",
                  link: "/products?category=footwear",
                  bgColor: "bg-[#00796B]", // Teal
                  textColor: "text-white",
                  hoverColor: "hover:bg-[#00695C]"
                },
                {
                  name: "Seasonal",
                  icon: "🌞",
                  link: "/products?category=seasonal",
                  bgColor: "bg-[#6A5ACD]", // Purple
                  textColor: "text-white",
                  hoverColor: "hover:bg-[#5D4AC1]"
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="overflow-hidden"
                >
                  <Link
                    to={category.link}
                    className={`block p-8 text-center rounded-2xl ${category.bgColor} ${category.textColor} ${category.hoverColor} transition-all h-full shadow-lg hover:shadow-xl`}
                  >
                    <span className="text-5xl mb-6 block transform group-hover:scale-110 transition-transform">{category.icon}</span>
                    <h3 className="font-bold text-xl md:text-2xl mb-2">{category.name}</h3>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-serif mb-3 tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#6A5ACD]">
                    Featured Products
                  </span>
                </h2>
                <p className="text-gray-600 text-lg">Editor's selection of our most exquisite pieces</p>
              </div>
              <Link
                to="/products"
                className="mt-6 md:mt-0 flex items-center text-[#00796B] hover:underline font-medium text-lg group"
              >
                View all products
                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {featuredProducts.map(product => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="relative"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Value Proposition - Bold Colors */}
        <section className="py-20 bg-white px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 tracking-tight">
                The Tasha's Promise
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our commitment to excellence in every detail
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              {[
                {
                  icon: "🚚",
                  title: "Free Shipping",
                  description: "On all orders over $300",
                  bgColor: "bg-[#FFD700]",
                  textColor: "text-gray-900"
                },
                {
                  icon: "💎",
                  title: "Authenticity Guaranteed",
                  description: "Direct from designers with certificates",
                  bgColor: "bg-[#00796B]",
                  textColor: "text-white"
                },
                {
                  icon: "🔄",
                  title: "Hassle-Free Returns",
                  description: "60-day return policy for your peace of mind",
                  bgColor: "bg-[#FF6B6B]",
                  textColor: "text-white"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`text-center p-8 rounded-3xl ${item.bgColor} ${item.textColor} shadow-xl hover:shadow-2xl transition-all`}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-6xl mb-8">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-lg">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter - Vibrant */}
        <section className="py-20 bg-[#6A5ACD] text-white px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={fadeIn}
              className="mb-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 tracking-tight">
                Join Our Exclusive Circle
              </h2>
              <p className="text-white/90 text-xl max-w-2xl mx-auto">
                Receive 15% off your first order, private collection previews, and VIP event invitations
              </p>
            </motion.div>

            <motion.form
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-lg border-0 focus:ring-2 focus:ring-[#FFD700] text-gray-900 placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-[#FFD700] text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-[#FFC000] transition flex items-center justify-center text-lg"
              >
                Become a Member
                <FaArrowRight className="ml-3" />
              </button>
            </motion.form>

            <motion.p
              variants={fadeIn}
              className="text-white/70 text-sm mt-6"
            >
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </motion.p>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default HomePage;