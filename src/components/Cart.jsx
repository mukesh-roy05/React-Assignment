// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity, clearCart, selectTotalPrice } from '../features/cartSlice';
import './Cart.css'; // Optional: Add specific CSS for Cart

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector(selectTotalPrice);

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      {cart.map(item => (
        <div key={item.id} className="card">
          <img src={item.images[0]} alt={item.title} className="card-image" />
          <h2 className="card-title">{item.title}</h2>
          <p className="card-price">${item.price.toFixed(2)} each</p>
          <div className="card-actions">
            <button className="quantity-button" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
            <span className="quantity">{item.quantity}</span>
            <button className="quantity-button" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
      <button className="action-button" onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
