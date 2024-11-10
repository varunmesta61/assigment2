// src/components/Cart.js
import React from 'react';

function Cart({ cart, removeFromCart }) {
  // Calculate the total price of all items in the cart
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>₹{item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
