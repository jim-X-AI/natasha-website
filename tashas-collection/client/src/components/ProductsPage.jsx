import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "24K Gold Hoop Earrings",
      price: 289.99,
      originalPrice: 349.99,
      category: "Accessories",
      image_url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
      isNew: true,
      rating: 4.8,
      reviewCount: 142
    },
    {
      id: 2,
      name: "Vitamin C Glow Serum",
      price: 79.99,
      category: "Skincare",
      image_url: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
      isBestSeller: true,
      rating: 4.9,
      reviewCount: 256
    },
    {
      id: 3,
      name: "Designer Leather Tote",
      price: 499.99,
      originalPrice: 599.99,
      category: "Accessories",
      image_url: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7",
      rating: 4.7,
      reviewCount: 89
    },
    {
      id: 4,
      name: "Silk Scarf Collection",
      price: 229.99,
      category: "Accessories",
      image_url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
      isNew: true,
      rating: 4.9,
      reviewCount: 187
    },
    {
      id: 5,
      name: "Luxury Night Cream",
      price: 129.99,
      category: "Skincare",
      image_url: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
      rating: 4.8,
      reviewCount: 203
    },
    {
      id: 6,
      name: "Pearl Drop Earrings",
      price: 349.99,
      category: "Accessories",
      image_url: "https://images.unsplash.com/photo-1611591437281-460914d25e6c",
      rating: 4.9,
      reviewCount: 156
    },
    {
      id: 7,
      name: "Designer Court Heels",
      price: 599.99,
      category: "Shoes",
      image_url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      isNew: true,
      rating: 4.7,
      reviewCount: 78
    },
    {
      id: 8,
      name: "Radiance Eye Serum",
      price: 89.99,
      category: "Skincare",
      image_url: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
      rating: 4.8,
      reviewCount: 132
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Accessories', 'Skincare', 'Shoes'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      {/* Hero Section */}
      <div className="mb-10 md:mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-3 md:mb-4 tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FCC200] to-[#FF6B6B]">
            Our Luxury Collection
          </span>
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Handpicked elegance for the discerning clientele
        </p>
      </div>

      {/* Search and Filter Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-10 md:mb-12"
      >
        {/* Search Bar - Full width on mobile, centered on larger screens */}
        <div className="relative max-w-md mx-auto mb-6 md:mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search our collection..."
            className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FCC200] focus:border-transparent text-sm md:text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Filters - Scrollable on mobile */}
        <div className="mb-4 md:mb-6 overflow-x-auto pb-2">
          <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 md:gap-3 w-max md:w-full mx-auto px-4 md:px-0">
            {categories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 md:px-6 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-[#FCC200] text-gray-900 shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-500 text-xs md:text-sm">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
        </p>
      </motion.div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-2"
            >
              <ProductCard product={product} compact />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 md:py-20"
        >
          <div className="max-w-md mx-auto px-4">
            <h3 className="text-xl md:text-2xl font-serif font-medium text-gray-700 mb-3 md:mb-4">No items match your search</h3>
            <p className="text-gray-500 mb-4 md:mb-6 text-sm md:text-base">
              We couldn't find any items matching your criteria. Try adjusting your search.
            </p>
            <motion.button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-2 md:py-3 bg-[#FCC200] hover:bg-[#E6B000] text-gray-900 font-medium rounded-full transition-colors text-sm md:text-base"
            >
              Reset Filters
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductsPage;