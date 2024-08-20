import React from "react";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css"; // Import any global styles

const App = () => {
  return (
    <CartProvider>
      <div className="app-container">
        <h1>Shopping Cart App</h1>
        <div className="container">
          <ProductList />

          <Cart />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
