import React from "react";
import men_banner2 from "../Assets/men_banner2.jpg";
import lady2_icon from "../Assets/lady2_icon.jpg";
const Home = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Welcome to Our E-Store!</h2>
      <p>
        Embrace the trend and discover a wide range of products at amazing prices. From electronics to clothing, we have everything you need.
      </p>
      <p>Start shopping now and enjoy life! Compare prices and get your items delivered right to your door!</p>

      {/* Featured Products Section (Optional) */}
      <div>
        <h3>Featured Products</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {/* Example Featured Product Cards */}
          <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <img
             
              src={men_banner2} alt="" 
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h4>Men suit</h4>
            <p>$209.95</p>
          </div>
          <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              alt="Product 2"
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h4>Mens Casual Slim Fit</h4>
            <p>$22.30</p>
          </div>
        </div>
      </div>
      <div>
        <h4>New Arrival</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {/* Example Featured Product Cards */}
          <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt="Product 1"
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h4>Fjallraven Backpack</h4>
            <p>$109.95</p>
          </div>
          <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <img
             src={lady2_icon} alt="" 
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h4>Ladies Casual Slim Fit</h4>
            <p>$22.30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;