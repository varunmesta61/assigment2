// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Cakes from './components/Cakes';
import Cart from './components/Cart';
import './App.css';
import Footer from './components/Footer'; 


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (cake) => {
    setCart([...cart, cake]);
    alert(`${cake.name} has been added to the cart!`);
  };

  const removeFromCart = (cakeId) => {
    setCart(cart.filter((item) => item.id !== cakeId));
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cakes" element={<Cakes addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/footer" element={<Footer />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
