import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty</p> : (
        cart.map((item) => (
          <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid #ddd", padding: "10px" }}>
            <img src={item.image} alt={item.title} style={{ width: "50px", height: "50px" }} />
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)} style={{ backgroundColor: "red", color: "white", padding: "5px" }}>Remove</button>
            {cart.length > 0 && (
  <button onClick={() => navigate("/checkout")} style={{ padding: "10px", backgroundColor: "green", color: "white", marginTop: "20px" }}>
    Proceed to Checkout
  </button>
)}
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
