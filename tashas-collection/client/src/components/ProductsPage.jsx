import { useState } from 'react';
import ProductCard from './ProductCard';

const ProductsPage = () => {
  const products = [
    { id: 1, name: "Gold Earrings", price: 25.99, category: "Accessories", image_url: "" },
    { id: 2, name: "Vitamin C Serum", price: 19.99, category: "Skincare", image_url: "" },
    { id: 3, name: "Leather Wallet", price: 35.50, category: "Accessories", image_url: "" },
    { id: 4, name: "Running Shoes", price: 89.99, category: "Shoes", image_url: "" },
    { id: 5, name: "Face Moisturizer", price: 24.99, category: "Skincare", image_url: "" },
    { id: 6, name: "Silver Necklace", price: 45.99, category: "Accessories", image_url: "" },
    { id: 7, name: "Sneakers", price: 65.00, category: "Shoes", image_url: "" },
    { id: 8, name: "Eye Cream", price: 29.99, category: "Skincare", image_url: "" }
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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Shop Our Collection</h1>
        <p className="text-gray-600">Discover our premium selection of products</p>
      </div>

      <div className="mb-8">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="text-gray-600 text-sm">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;