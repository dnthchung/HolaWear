import React, { useState } from "react";
import ProductCard from "../../components/ProductCard";
import Sidebar from "../../components/SideBar";

const ProductList = ({ products, category }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([0, 1000000]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [sortOption, setSortOption] = useState("featured");

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortProducts = (products) => {
    switch (sortOption) {
      case "price-high-low":
        return products.sort((a, b) => b.price - a.price);
      case "price-low-high":
        return products.sort((a, b) => a.price - b.price);
      case "newest":
        return products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      default:
        return products;
    }
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.category.toLowerCase() === category.toLowerCase() &&
      (!selectedColor || Object.keys(product.stockDetails).includes(selectedColor)) &&
      product.price >= selectedPrice[0] &&
      product.price <= selectedPrice[1] &&
      (!selectedBrand || product.brand === selectedBrand)
    );
  });

  const sortedProducts = sortProducts(filteredProducts);

  return (
    <div className="container mx-auto p-6 flex">
      <div className={`transition-transform duration-300 ease-in-out ${showSidebar ? "w-64" : "w-0"} overflow-hidden`}>
        <Sidebar
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          priceRange={selectedPrice}
          setPriceRange={setSelectedPrice}
        />
      </div>
      <div className="flex-1 ml-4">
        <div className="flex justify-between items-center mb-4">
          <button onClick={toggleSidebar} className="bg-gray-200 p-2 rounded">
            {showSidebar ? "Hide Filters" : "Show Filters"}
          </button>
          <div className="relative">
            <select value={sortOption} onChange={handleSortChange} className="bg-gray-200 p-2 rounded">
              <option value="newest">Newest</option>
              <option value="price-high-low">Price: High-Low</option>
              <option value="price-low-high">Price: Low-High</option>
            </select>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">
          {category.charAt(0).toUpperCase() + category.slice(1)} Products ({filteredProducts.length})
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
