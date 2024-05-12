import './index.css'
import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import Sidebar from '../Sidebar';

const ProductGrid = () => {
  // State for storing products
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data); // Update state with fetched products
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once after initial render

  // Render the grid with ProductCards
  return (
    <div className='main-content'>
      <hr/>
      <div className='count-container'>
        <p>3425 Items</p>
        <button type="button">HIDE FILTER</button>
          <select>
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE: HIGH TO LOW</option>
            <option>PRICE: LOW TO HIGH</option>
          </select>
      </div>
      <hr/>
      <div className='content-container'>
        <Sidebar />
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;