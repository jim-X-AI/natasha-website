import { useCart } from '../context/CartContext.jsx';
import { FiX, FiPlus, FiMinus, FiShoppingCart } from 'react-icons/fi';
import { motion } from 'framer-motion';

const CartModal = () => {
  const {
    cartItems,
    totalPrice,
    isCartOpen,
    toggleCart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25 }}
        className="bg-white w-full max-w-md h-full overflow-y-auto flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-serif font-bold text-gray-900">Your Shopping Bag</h2>
            <button
              onClick={toggleCart}
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="Close cart"
            >
              <FiX size={24} />
            </button>
          </div>
        </div>

        {/* Empty State */}
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 flex-grow">
            <FiShoppingCart size={64} className="mx-auto text-gray-200 mb-6" />
            <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
            <button
              onClick={toggleCart}
              className="px-8 py-3 bg-[#FCC200] hover:bg-[#E6B000] text-gray-900 font-medium rounded-full transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto divide-y divide-gray-100">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-6"
                >
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <FiX size={18} />
                        </button>
                      </div>
                      <p className="text-gray-600 mt-1">${item.price.toFixed(2)}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center mt-4">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-gray-500 hover:text-primary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <FiMinus size={16} />
                        </button>
                        <span className="w-8 text-center text-gray-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-gray-500 hover:text-primary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <FiPlus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Checkout Footer */}
            <div className="p-6 border-t border-gray-100 sticky bottom-0 bg-white">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-serif font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-[#FCC200] hover:bg-[#E6B000] text-gray-900 py-3 rounded-full font-medium transition-colors"
                onClick={() => alert('Proceeding to checkout')}
              >
                Proceed to Checkout
              </button>
              <p className="text-center text-gray-500 text-sm mt-4">
                Free shipping on orders over $300
              </p>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CartModal;