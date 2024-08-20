import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "./Products";
import "./ProductList.css"; // Import the CSS file
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductList = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div className="product-list">
      <div>
        <div>
          <h2>Product List</h2>
        </div>
        <div className="container1">
          {products.map((product) => (
            <div key={product.id} className="card ">
              <Card.Img variant="top" src={product.image} />
              <h3> Category : {product.category}</h3>
              <p>Price : ${product.price}</p>
              <p>
                <span>Rating : {product.rating.rate}</span>
                <span> Total : {product.rating.count}</span>
              </p>
              {isInCart(product.id) ? (
                <button onClick={() => removeFromCart(product.id)}>
                  Remove from Cart
                </button>
              ) : (
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
