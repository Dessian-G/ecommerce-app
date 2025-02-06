import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
      {products.map((product) => (
  <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
    <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} />
    <h4>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
        {product.title}
      </Link>
    </h4>
    <p>${product.price}</p>
  </div>
       
        ))}
      </div>
    </div>
  );
};

export default Products;
