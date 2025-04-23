import { useCart } from '../context/CartContext.jsx';
import { FiX, FiPlus, FiMinus, FiShoppingCart } from 'react-icons/fi';

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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto">
        <div className="p-4 border-b sticky top-0 bg-white z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button
              onClick={toggleCart}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close cart"
            >
              <FiX size={24} />
            </button>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="p-8 text-center">
            <FiShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">Your cart is empty</p>
            <button
              onClick={toggleCart}
              className="mt-4 text-primary hover:underline"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="divide-y">
              {cartItems.map((item) => (
                <div key={item.id} className="p-4">
                  <div className="flex justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 text-gray-500 hover:text-primary"
                        aria-label="Decrease quantity"
                      >
                        <FiMinus size={16} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-gray-500 hover:text-primary"
                        aria-label="Increase quantity"
                      >
                        <FiPlus size={16} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-500 hover:text-red-700"
                      aria-label="Remove item"
                    >
                      <FiX size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t sticky bottom-0 bg-white">
              <div className="flex justify-between mb-4">
                <span className="font-bold">Total:</span>
                <span className="font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-lg font-medium"
                onClick={() => alert('Checkout functionality would go here')}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;