//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Import the Home component
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";



import './App.css';

function App() {
  return (
    <Router>
    <div >
      <Navbar/>
        <h1>Max Store App</h1>
        
       
        
        
       
        <Routes>
          <Route path="/" element={<Home />} /> {/* Set Home as the default route */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />


          <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
