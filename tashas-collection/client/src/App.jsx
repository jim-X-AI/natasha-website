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
      <div className="min-h-screen bg-light">
        <Navbar />
        <main className="pt-20"> {/* Critical padding for fixed navbar */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </main>
        <CartModal />
      </div>
    </CartProvider>
  );
}

export default App;