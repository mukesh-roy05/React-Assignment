import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css"; // Import the CSS file

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(CartContext);

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2 className="title">Shopping Cart : {cart.length}</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="card-list">
            {cart.map((item) => (
              <li key={item.id} className="card">
                <div>
                  {item.title} - ${item.price} x {item.quantity}
                </div>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="total-price">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
