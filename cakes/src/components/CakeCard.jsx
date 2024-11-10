// src/components/CakeCard.js
import React from 'react';

function CakeCard({ cake, addToCart }) {
  return (
    <div className="cake-card">
      <img src={cake.image} alt={cake.name} className="cake-image" />
      <h3>{cake.name}</h3>
      <p>Price: ₹{cake.price}</p>
      <button onClick={() => addToCart(cake)}>Add to Cart</button>
    </div>
  );
}

export default CakeCard;
