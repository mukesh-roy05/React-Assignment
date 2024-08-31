import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cartSlice';
import { selectProducts } from '../features/productsSlice';
import './ProductList.css'; // Optional: Add specific CSS for ProductList

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [expandedProductId, setExpandedProductId] = useState(null);

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  const toggleDetails = (id) => {
    setExpandedProductId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.images[0]} alt={product.title} className="product-image" />
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">  ${product.price.toFixed(2)}</p>
          <button className="action-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          <button className="details-button" onClick={() => toggleDetails(product.id)}>
            {expandedProductId === product.id ? 'Show Less' : 'Read More'}
          </button>
          {expandedProductId === product.id && (
            <div className="product-details">
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Rating:</strong> {product.rating}</p>
              <p><strong>Stock:</strong> {product.stock}</p>
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Category:</strong> {product.category}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
