import React, { useState } from 'react';
import './App.css';
import Homepage from './Pages/Homepage';
import Beverage from './Pages/Beverage';
import Chocolate from './Pages/Chocolate';
import Header from './Components/Header';
import Fruitsveges from './Pages/Fruitsveges';
import Condiments from './Pages/Condiments';
import Breads from './Pages/Breads';
import Frozenfood from './Pages/Frozenfood';
import Ricenoodles from './Pages/Ricenoodles';
import Cereal from './Pages/Cereal';
import Snacks from './Pages/Snacks';
import Cleaninghousehold from './Pages/Cleaninghousehold';
import Dairyproducts from './Pages/Dairyproducts';
import Dryfruits from './Pages/Dryfruits';
import Signinpage from './Pages/Signinpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Homepage addToCart={addToCart} />} />
        <Route path="/Beverage" element={<Beverage addToCart={addToCart} />} />
        <Route path="/Chocolate" element={<Chocolate addToCart={addToCart} />} />
        <Route path="/Fruitsveges" element={<Fruitsveges addToCart={addToCart} />} />
        <Route path="/Condiments" element={<Condiments addToCart={addToCart} />} />
        <Route path="/Breads" element={<Breads addToCart={addToCart} />} />
        <Route path="/Frozenfood" element={<Frozenfood addToCart={addToCart} />} />
        <Route path="/Ricenoodles" element={<Ricenoodles addToCart={addToCart} />} />
        <Route path="/Cereal" element={<Cereal addToCart={addToCart} />} />
        <Route path="/Snacks" element={<Snacks addToCart={addToCart} />} />
        <Route path="/Cleaninghousehold" element={<Cleaninghousehold addToCart={addToCart} />} />
        <Route path="/Dairyproducts" element={<Dairyproducts addToCart={addToCart} />} />
        <Route path="/Dryfruits" element={<Dryfruits addToCart={addToCart} />} />
        <Route path="/Signinpage" element={<Signinpage />} />
      </Routes>
    </Router>
  );
};

export default App; 