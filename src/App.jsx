import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Layout from "./components/layout/Layout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Shop";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Confirm from "./pages/Confirm"; 
import Admin from "./pages/Admin";
import Shipping from "./pages/Shipping";
import Refund from "./pages/Refund";
import Thanks from "./pages/Thanks";
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <Routes>
    
        <Route element={<Layout />}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Confirm />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/thanks" element={<Thanks />} />
        </Route>
    
      
      
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
