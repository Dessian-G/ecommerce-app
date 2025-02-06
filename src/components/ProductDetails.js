import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: "200px", height: "200px" }} />
      <h3>${product.price}</h3>
      <p>{product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <button onClick={() => addToCart(product)} style={{ padding: "10px", backgroundColor: "green", color: "white" }}>
  Add to Cart
</button>
    </div>
  );
};

export default ProductDetails;
