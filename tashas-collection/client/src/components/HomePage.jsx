import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import Hero from './Hero';
import ProductCard from './ProductCard';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const HomePage = () => {
  // Featured collections
  const collections = [
    {
      name: "New Arrivals",
      query: "?sort=newest",
      bgColor: "bg-primary",
      textColor: "text-white",
      image: "bg-[url('https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93')]"
    },
    {
      name: "Best Sellers",
      query: "?sort=bestselling",
      bgColor: "bg-accent-green",
      textColor: "text-white",
      image: "bg-[url('https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0')]"
    },
    {
      name: "Summer Essentials",
      query: "?collection=summer",
      bgColor: "bg-accent-pink",
      textColor: "text-white",
      image: "bg-[url('https://images.unsplash.com/photo-1551232864-3f0890e580d9')]"
    }
  ];

  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "24K Gold Earrings",
      description: "Handcrafted luxury earrings with genuine gold plating",
      price: 89.99,
      category: "Accessories",
      rating: 4.8,
      image_url: "https://images.unsplash.com/photo-1611591437281-460914d0f587"
    },
    {
      id: 2,
      name: "Vitamin C Glow Serum",
      description: "Brightening serum with 20% vitamin C and hyaluronic acid",
      price: 49.99,
      category: "Skincare",
      rating: 4.9,
      image_url: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b"
    },
    {
      id: 3,
      name: "Designer Leather Tote",
      description: "Premium Italian leather with gold-tone hardware",
      price: 199.99,
      category: "Accessories",
      rating: 4.7,
      image_url: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7"
    },
    {
      id: 4,
      name: "Silk Scarf Collection",
      description: "Luxury hand-rolled silk scarves in seasonal colors",
      price: 129.99,
      category: "Accessories",
      rating: 4.9,
      image_url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b"
    }
  ];

  // Categories data
  const categories = [
    {
      name: "Accessories",
      icon: "💍",
      link: "/products?category=accessories",
      color: "bg-accent-pink/10"
    },
    {
      name: "Skincare",
      icon: "🧴",
      link: "/products?category=skincare",
      color: "bg-primary/10"
    },
    {
      name: "Footwear",
      icon: "👠",
      link: "/products?category=footwear",
      color: "bg-accent-green/10"
    },
    {
      name: "Seasonal",
      icon: "🌞",
      link: "/products?category=seasonal",
      color: "bg-accent-yellow/10"
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="font-sans antialiased"
    >
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/1234567890"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl z-50 hover:shadow-2xl transition-all"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp size={24} />
      </motion.a>

      {/* Hero Section */}
      <Hero />

      {/* Collections Banner */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Our Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Curated selections for every style and occasion</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`${collection.bgColor} ${collection.textColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all`}
              >
                <Link to={`/products${collection.query}`} className="block h-full">
                  <div className={`${collection.image} bg-cover bg-center h-64 md:h-80 relative`}>
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-all"></div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                    <div className="flex items-center">
                      <span className="mr-2">Shop now</span>
                      <FaArrowRight className="text-sm" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={itemVariants}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Shop By Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find exactly what you're looking for</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="overflow-hidden"
              >
                <Link to={category.link} className={`block p-6 md:p-8 text-center rounded-xl ${category.color} hover:shadow-md transition-all h-full`}>
                  <span className="text-4xl mb-4 block">{category.icon}</span>
                  <h3 className="font-medium text-lg md:text-xl">{category.name}</h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-2">Featured Products</h2>
              <p className="text-gray-600">Our most loved items this season</p>
            </div>
            <Link
              to="/products"
              className="mt-4 md:mt-0 flex items-center text-primary hover:underline font-medium group"
            >
              View all products
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {featuredProducts.map(product => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24 bg-accent-green text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={itemVariants}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Why Choose Us</h2>
            <p className="text-white/80 max-w-2xl mx-auto">The Tasha's Collection difference</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {[
              {
                icon: "🚚",
                title: "Free Shipping",
                description: "On all orders over $50"
              },
              {
                icon: "💎",
                title: "Premium Quality",
                description: "Handcrafted with finest materials"
              },
              {
                icon: "🔄",
                title: "Easy Returns",
                description: "30-day satisfaction guarantee"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Skincare & Fashion Tips</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Expert advice to enhance your beauty routine</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Summer Skincare Routine",
                excerpt: "Discover the perfect routine for glowing summer skin",
                category: "Skincare",
                image: "bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9')]"
              },
              {
                title: "Accessorizing Essentials",
                excerpt: "How to elevate any outfit with statement pieces",
                category: "Fashion",
                image: "bg-[url('https://images.unsplash.com/photo-1591047139829-d91aecb6caea')]"
              },
              {
                title: "Shoe Care Guide",
                excerpt: "Keep your luxury footwear looking brand new",
                category: "Care",
                image: "bg-[url('https://images.unsplash.com/photo-1460353581641-37baddab0fa2')]"
              }
            ].map((post, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white"
              >
                <div className={`${post.image} bg-cover bg-center h-64`}></div>
                <div className="p-6 md:p-8">
                  <span className="text-sm text-primary font-medium uppercase tracking-wider">{post.category}</span>
                  <h3 className="text-xl md:text-2xl font-bold my-3">{post.title}</h3>
                  <p className="text-gray-600 mb-5">{post.excerpt}</p>
                  <Link to="/blog" className="inline-flex items-center text-primary font-medium group">
                    Read more
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-accent-pink text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            variants={fadeIn}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Join Our Community</h2>
            <p className="text-white/90 text-lg">Get 10% off your first order and exclusive access to new collections</p>
          </motion.div>

          <motion.form
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition flex items-center justify-center"
            >
              Subscribe
              <FaArrowRight className="ml-2" />
            </button>
          </motion.form>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;