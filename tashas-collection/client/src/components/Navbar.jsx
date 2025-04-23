import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = 3; // Replace with actual cart count from state/context

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/* Logo */}
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-900 text-2xl">
                  Tasha's Collection
                </span>
              </Link>
            </div>
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="py-4 px-2 text-gray-700 hover:text-primary transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/products"  // Changed from "/shop" to "/products"
                className="py-4 px-2 text-6xl font-bold text-gray-700 hover:text-primary transition duration-300"
              >
                Shop
              </Link>
              <Link
                to="/blog"
                className="py-4 px-2 text-gray-700 hover:text-primary transition duration-300"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="py-4 px-2 text-gray-700 hover:text-primary transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/cart"
              className="py-2 px-2 flex items-center relative"
            >
              <FaShoppingCart className="h-6 w-6 text-gray-700 hover:text-primary transition duration-300" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>
          </div>
          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;