import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import ProductDetail from './Component/ProductDetail';
import Comparision from './Component/Comparision';
import Cart from './Component/Cart';
import Checkout from './Component/Checkout';
import Contactsection from './Pages/Contactsection';
import Aboutsection from './Pages/Aboutsection';
import Shop from './Pages/Shop';

function App() {
  return (
    <Router>
    
<Navbar />

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/product/:id" element={<ProductDetail />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/comparison" element={<Comparision />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/about" element={<Aboutsection/>} />
  <Route path="/contact" element={<Contactsection />} />

</Routes>

<Footer />

    </Router>
  );
}

export default App;