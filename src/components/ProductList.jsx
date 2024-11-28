import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice"; // Import the actions
import "../styles/ProductList.css"; // Optional, for custom styling

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Get the items in the cart

  // Sample product data
  const products = [
    { id: 1, name: "Laptop", price: 999, image: "https://via.placeholder.com/250x150?text=Laptop" },
    { id: 2, name: "Smartphone", price: 499, image: "https://via.placeholder.com/250x150?text=Smartphone" },
    { id: 3, name: "Headphones", price: 199, image: "https://via.placeholder.com/250x150?text=Headphones" },
    { id: 4, name: "Laptop", price: 999, image: "https://via.placeholder.com/250x150?text=Laptop" },
    { id: 5, name: "Smartphone", price: 499, image: "https://via.placeholder.com/250x150?text=Smartphone" },
    { id: 6, name: "Headphones", price: 199, image: "https://via.placeholder.com/250x150?text=Headphones" },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch addToCart action
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product)); // Dispatch removeFromCart action
  };

  // Check if the product is in the cart
  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>

                {/* Conditionally render the button */}
                {isProductInCart(product.id) ? (
                  <button
                    className="btn btn-danger w-100"
                    onClick={() => handleRemoveFromCart(product)}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
