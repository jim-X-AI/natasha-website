import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import CartModal from './components/CartModal';
import './App.css';
import './index.css';

function App() {
  return (
    <CartProvider>
      {/* Root container */}
      <div className="min-h-screen bg-light font-sans antialiased text-gray-900">
        {/* Navbar */}
        <Navbar />

        {/* Main content with padding for fixed navbar */}
        <main className="pt-20">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />

            {/* Products Page */}
            <Route path="/products" element={<ProductsPage />} />

            {/* Category-specific routes */}
            <Route path="/products?category=accessories" element={<ProductsPage />} />
            <Route path="/products?category=skincare" element={<ProductsPage />} />
            <Route path="/products?category=footwear" element={<ProductsPage />} />
            <Route path="/products?category=seasonal" element={<ProductsPage />} />
          </Routes>
        </main>

        {/* Cart Modal */}
        <CartModal />
      </div>
    </CartProvider>
  );
}

export default App;