import { Link } from "react-router-dom";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";
import { useCart } from '../context/CartContext.jsx';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Link to={`/products/${product.id}`} className="block">
        {/* Product Image */}
        <div className="relative pb-[100%] bg-gray-50">
          {product.image_url ? (
            <img
              className="absolute h-full w-full object-cover"
              src={product.image_url}
              alt={product.name}
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FCC200]/20 to-[#FF6B6B]/20">
              <span className="text-2xl font-serif font-medium text-gray-700">
                {product.name.split(' ').map(word => word[0]).join('')}
              </span>
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {product.isNew && (
              <span className="bg-[#FCC200] text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                New Arrival
              </span>
            )}
            {product.isBestSeller && (
              <span className="bg-[#00796B] text-white px-3 py-1 rounded-full text-xs font-bold">
                Bestseller
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5">
          <div className="mb-3">
            <h3 className="font-serif text-xl font-medium text-gray-900 mb-1 line-clamp-1">
              {product.name}
            </h3>
            {product.description && (
              <p className="text-gray-600 text-sm line-clamp-2">
                {product.description}
              </p>
            )}
          </div>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center mb-3">
              <div className="flex text-[#FCC200]">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                    size={14}
                  />
                ))}
              </div>
              <span className="text-gray-500 text-xs ml-2">
                ({product.reviewCount || 0} reviews)
              </span>
            </div>
          )}

          {/* Price and CTA */}
          <div className="flex justify-between items-center">
            <div>
              <span className="font-serif font-bold text-gray-900 text-lg">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="ml-2 text-gray-400 text-sm line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="bg-[#FCC200] hover:bg-[#E6B000] text-gray-900 px-4 py-2 rounded-full flex items-center transition-colors duration-200 text-sm font-medium"
              whileTap={{ scale: 0.95 }}
            >
              <FiShoppingCart className="mr-2" />
              Add
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

ProductCard.defaultProps = {
  product: {
    id: 1,
    name: "Luxury Silk Scarf",
    description: "Handcrafted from 100% pure silk with exquisite detailing",
    price: 249.99,
    originalPrice: 299.99,
    image_url: "",
    rating: 4.8,
    reviewCount: 142,
    isNew: true,
    isBestSeller: false
  }
};

export default ProductCard;