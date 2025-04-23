import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from '../context/CartContext.jsx';  // <-- New import

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();  // <-- Get addToCart function from context

  // Generate consistent placeholder color based on product ID
  const placeholderColor = `hsl(${(product.id * 137) % 360}, 60%, 85%)`;
  const textColor = `hsl(${(product.id * 137) % 360}, 60%, 30%)`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      <Link to={`/products/${product.id}`}>
        <div className="relative pb-2/3 h-64 bg-gray-100">
          {product.image_url ? (
            <img
              className="absolute h-full w-full object-cover"
              src={product.image_url}
              alt={product.name}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          ) : null}
          <div
            className={`absolute h-full w-full flex items-center justify-center`}
            style={{ backgroundColor: placeholderColor }}
          >
            <span
              className="text-xl font-bold"
              style={{ color: textColor }}
            >
              {product.name.split(' ').map(word => word[0]).join('')}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg mb-1 text-gray-900 hover:text-primary transition">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}  // <-- Updated click handler
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full flex items-center transition duration-300"
          >
            <FiShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Default props remain the same
ProductCard.defaultProps = {
  product: {
    id: 1,
    name: "Sample Product",
    description: "This is a sample product description that might be a bit longer.",
    price: 49.99,
    image_url: "",
  },
};

export default ProductCard;