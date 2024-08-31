// src/components/Header.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../features/cartSlice';
import Cart from './Cart';
import './Header.css'; // Optional: Add specific CSS for Header

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Calculate total quantity of items in the cart
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleCartToggle = () => {
    setIsCartVisible(prevState => !prevState);
  };

  return (
    <header className="header">
      <h1>Shopping Cart</h1>
      <button className="cart-button" onClick={handleCartToggle}>
        🛒 Cart ({totalQuantity})
      </button>
      {isCartVisible && <Cart />}
    </header>
  );
};

export default Header;
