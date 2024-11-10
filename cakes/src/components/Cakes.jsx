// src/components/Cakes.js
import React from 'react';
import CakeCard from './CakeCard';

function Cakes({ addToCart }) {
  const cakeList = [
    { id: 1, name: 'Chocolate Delight', price: 800, image: '/img/cake1.jpg' },
    { id: 2, name: 'Strawberry Shortcake', price: 1000, image: '/img/cake2.jpg' },
  ];

  return (
    <div>
      <h2>Our Cakes</h2>
      <div className="cakes-container">
        {cakeList.map(cake => (
          <CakeCard key={cake.id} cake={cake} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Cakes;
