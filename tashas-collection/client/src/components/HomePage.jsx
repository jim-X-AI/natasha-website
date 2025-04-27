import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaArrowRight, FaStar, FaRegStar, FaSearch, FaShoppingBag, FaHeart } from 'react-icons/fa';
import Hero from './Hero';

const HomePage = () => {
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

  // Featured products with optimized image sizes
  const featuredProducts = [
    {
      id: 1,
      name: "24K Gold Earrings",
      description: "Handcrafted luxury earrings",
      price: 289.99,
      originalPrice: 349.99,
      category: "Jewelry",
      rating: 4.8,
      reviewCount: 142,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
      isNew: true,
      isBestSeller: false
    },
    {
      id: 2,
      name: "Vitamin C Serum",
      description: "Brightening skincare essential",
      price: 79.99,
      category: "Skincare",
      rating: 4.9,
      reviewCount: 256,
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
      isNew: false,
      isBestSeller: true
    },
    {
      id: 3,
      name: "Leather Tote",
      description: "Premium Italian leather",
      price: 499.99,
      originalPrice: 599.99,
      category: "Bags",
      rating: 4.7,
      reviewCount: 89,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7",
      isNew: false,
      isBestSeller: false
    },
    {
      id: 4,
      name: "Silk Scarf",
      description: "Luxury hand-rolled silk",
      price: 229.99,
      category: "Accessories",
      rating: 4.9,
      reviewCount: 187,
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
      isNew: true,
      isBestSeller: false
    },
    {
      id: 5,
      name: "Pearl Necklace",
      description: "Elegant freshwater pearls",
      price: 349.99,
      originalPrice: 399.99,
      category: "Jewelry",
      rating: 4.8,
      reviewCount: 112,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
      isNew: false,
      isBestSeller: true
    },
    {
      id: 6,
      name: "Cashmere Wrap",
      description: "Ultra-soft 100% cashmere",
      price: 379.99,
      originalPrice: 449.99,
      category: "Accessories",
      rating: 4.9,
      reviewCount: 203,
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9",
      isNew: false,
      isBestSeller: true
    }
  ];

  // Collections
  const collections = [
    {
      name: "New Arrivals",
      description: "Discover our latest additions",
      link: "/products?sort=newest",
      image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93",
      bgColor: "from-[#FFD700]/80 to-[#FFD700]/60",
      textColor: "text-gray-900",
      buttonColor: "bg-gray-900 text-white hover:bg-gray-800"
    },
    {
      name: "Best Sellers",
      description: "Our most loved pieces",
      link: "/products?sort=bestselling",
      image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0",
      bgColor: "from-[#00796B]/80 to-[#00796B]/60",
      textColor: "text-white",
      buttonColor: "bg-white text-gray-900 hover:bg-gray-100"
    },
    {
      name: "Summer Edit",
      description: "Curated seasonal selection",
      link: "/products?collection=summer",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9",
      bgColor: "from-[#FF6B6B]/80 to-[#FF6B6B]/60",
      textColor: "text-white",
      buttonColor: "bg-white text-[#FF6B6B] hover:bg-gray-100"
    }
  ];

  // Categories
  const categories = [
    {
      name: "Jewelry",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
      link: "/products?category=jewelry",
      count: 42
    },
    {
      name: "Skincare",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
      link: "/products?category=skincare",
      count: 28
    },
    {
      name: "Bags",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7",
      link: "/products?category=bags",
      count: 35
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
      link: "/products?category=accessories",
      count: 57
    }
  ];

  // Value propositions
  const values = [
    {
      icon: "🚚",
      title: "Free Shipping",
      description: "On orders over $300",
      bg: "bg-[#FFD700]",
      textColor: "text-gray-900"
    },
    {
      icon: "💎",
      title: "Authentic Luxury",
      description: "Direct from designers",
      bg: "bg-[#00796B]",
      textColor: "text-white"
    },
    {
      icon: "🔄",
      title: "Easy Returns",
      description: "60-day return policy",
      bg: "bg-[#FF6B6B]",
      textColor: "text-white"
    }
  ];

  // Render star rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      i < Math.floor(rating) ? (
        <FaStar key={i} className="text-yellow-400 w-3 h-3 sm:w-4 sm:h-4" />
      ) : (
        <FaRegStar key={i} className="text-yellow-400 w-3 h-3 sm:w-4 sm:h-4" />
      )
    ));
  };

  return (
    <div className="font-sans antialiased text-gray-900">
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/81452004"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp size={20} />
      </motion.a>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero Section */}
        <Hero />

        {/* Featured Products with Optimized Image Sizes */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 lg:mb-12"
            >
              <div className="mb-4 sm:mb-0">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif mb-2 tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#6A5ACD]">
                    Featured Products
                  </span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                  Curated selection of our finest pieces
                </p>
              </div>
              <Link
                to="/products"
                className="flex items-center text-[#00796B] hover:underline font-medium text-sm sm:text-base lg:text-lg group"
              >
                View all products
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
            >
              {featuredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <Link to={`/product/${product.id}`} className="block">
                    {/* Optimized Image Container */}
                    <div className="relative pt-[70%] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                      {/* Badges */}
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        {product.isNew && (
                          <span className="bg-[#FF6B6B] text-white text-xs px-2 py-1 rounded-full">
                            New
                          </span>
                        )}
                        {product.isBestSeller && (
                          <span className="bg-[#00796B] text-white text-xs px-2 py-1 rounded-full">
                            Bestseller
                          </span>
                        )}
                      </div>
                      {/* Quick Actions */}
                      <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100">
                          <FaHeart className="text-gray-700 text-xs" />
                        </button>
                        <button className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100">
                          <FaSearch className="text-gray-700 text-xs" />
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <h3 className="font-medium text-sm sm:text-base mb-1 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-xs line-clamp-2 mb-2">
                        {product.description}
                      </p>
                      <div className="flex items-center mb-2">
                        <div className="flex mr-1">
                          {renderStars(product.rating)}
                        </div>
                        <span className="text-xs text-gray-500">
                          ({product.rating})
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-gray-900 text-sm sm:text-base">
                            ${product.price.toFixed(2)}
                          </span>
                          {product.originalPrice && (
                            <span className="ml-2 text-xs line-through text-gray-500">
                              ${product.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <button className="bg-[#00796B] text-white p-1.5 rounded-full hover:bg-[#00695C]">
                          <FaShoppingBag className="text-xs" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Collections Banner */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="text-center mb-10 lg:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif mb-3 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FF6B6B]">
                  Our Collections
                </span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
                Curated selections for the discerning clientele
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            >
              {collections.map((collection, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-64 sm:h-80 lg:h-96 ${collection.bgColor}`}
                  whileHover={{ y: -8 }}
                >
                  <Link to={collection.link} className="block h-full">
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${collection.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                      <div>
                        <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-2 ${collection.textColor}`}>
                          {collection.name}
                        </h3>
                        <p className={`text-sm sm:text-base mb-4 ${collection.textColor} opacity-90`}>
                          {collection.description}
                        </p>
                        <button className={`${collection.buttonColor} px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all flex items-center`}>
                          Shop Now
                          <FaArrowRight className="ml-2" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="text-center mb-10 lg:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif mb-3 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00796B] to-[#6A5ACD]">
                  Shop By Category
                </span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
                Find exactly what you're looking for
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all aspect-square"
                  whileHover={{ scale: 1.02 }}
                >
                  <Link to={category.link} className="block h-full">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${category.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-all" />
                    </div>
                    <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                      <div>
                        <h3 className="text-white font-bold text-lg sm:text-xl drop-shadow-lg">
                          {category.name}
                        </h3>
                        <span className="text-white/80 text-xs">
                          {category.count} items
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="text-center mb-10 lg:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif mb-3 tracking-tight">
                The Tasha's Promise
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
                Our commitment to excellence in every detail
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${value.bg} ${value.textColor} rounded-xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all`}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl sm:text-5xl mb-4">{value.icon}</div>
                  <h3 className="font-bold text-lg sm:text-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#6A5ACD] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={itemVariants}
              className="mb-8 lg:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif mb-4 tracking-tight">
                Join Our Exclusive Circle
              </h2>
              <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                Receive 15% off your first order and VIP access to new collections
              </p>
            </motion.div>

            <motion.form
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#FFD700] text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                className="bg-[#FFD700] text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-[#FFC000] transition flex items-center justify-center text-sm sm:text-base"
              >
                Subscribe
                <FaArrowRight className="ml-2" />
              </button>
            </motion.form>

            <motion.p
              variants={itemVariants}
              className="text-white/70 text-xs sm:text-sm mt-6"
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