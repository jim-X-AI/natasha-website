import { useState, useEffect } from "react";
import { FaShoppingCart, FaSearch, FaUser, FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cartItems = 3; // Replace with actual cart count from state/context

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or when route changes
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".mobile-menu-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { name: "Accessories", path: "/products/accessories" },
    { name: "Skincare", path: "/products/skincare" },
    { name: "Shoes", path: "/products/shoes" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Journal", path: "/blog" }
  ];

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed w-full bg-white z-50 transition-all duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            onClick={closeMobileMenu}
          >
            <span className="font-serif text-2xl font-bold text-gray-900 tracking-tight">
              TASHA'S
            </span>
            <span className="font-serif text-2xl font-light text-gray-900 ml-1">
              COLLECTION
            </span>
          </Link>

          {/* Primary Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-primary transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Secondary Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link
              to="/search"
              className="p-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Search"
            >
              <FaSearch className="w-5 h-5" />
            </Link>
            <Link
              to="/account"
              className="p-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Account"
            >
              <FaUser className="w-5 h-5" />
            </Link>
            <Link
              to="/cart"
              className="p-2 text-gray-700 hover:text-primary transition-colors relative"
              aria-label="Shopping Cart"
            >
              <FaShoppingCart className="w-5 h-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2 text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mobile-menu-container bg-white fixed w-full left-0 z-40 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen shadow-xl" : "max-h-0"}`}
        style={{ top: "4rem" }}
      >
        <div className="px-4 sm:px-6 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block py-3 px-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors font-medium rounded-md"
              onClick={closeMobileMenu}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center justify-center space-x-4 pt-2 pb-4 border-t border-gray-100 mt-2">
            <Link
              to="/search"
              className="p-2 text-gray-700 hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              <FaSearch className="w-5 h-5" />
            </Link>
            <Link
              to="/account"
              className="p-2 text-gray-700 hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              <FaUser className="w-5 h-5" />
            </Link>
            <Link
              to="/cart"
              className="p-2 text-gray-700 hover:text-primary transition-colors relative"
              onClick={closeMobileMenu}
            >
              <FaShoppingCart className="w-5 h-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;