import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css"; // Import the CSS file

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart : {cart.length}</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="card-list">
          {cart.map((item) => (
            <li key={item.id} className="card">
              <div>
                {item.title} : ${item.price}
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="total-price">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
      <button className="clear-cart" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
