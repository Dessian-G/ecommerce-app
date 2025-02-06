import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartItemCount }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>E-Commerce</Link>
      </div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>

        <Link to="/products" style={styles.link}>Products</Link>
       
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/signup" style={styles.link}>Signup</Link>
        <Link to="/cart" style={{ textDecoration: "none", marginLeft: "20px" }}>
  🛒 Cart
</Link>
        
      </div>
    </nav>
  );
};

// Inline styles for simplicity
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #ddd",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
  },
  cartBadge: {
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    padding: "2px 6px",
    marginLeft: "5px",
    fontSize: "12px",
  },
};

export default Navbar;