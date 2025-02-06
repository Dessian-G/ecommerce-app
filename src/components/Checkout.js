import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", address: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(` your Order placed successfully!\nName: ${form.name}\nAddress: ${form.address}\nEmail: ${form.email}`);
    
    // Clear the cart after checkout
    
    setCart([]);

    // Redirect to home page
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <a href="/products">Shop now</a></p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Shipping Address" value={form.address} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <button type="submit" style={{ padding: "10px", backgroundColor: "blue", color: "white" }}>Place Order</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
