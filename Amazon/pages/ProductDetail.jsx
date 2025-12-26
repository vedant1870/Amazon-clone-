import { useParams } from "react-router-dom";
import products from "../data/product";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const { dispatch } = useContext(CartContext);
  const product = products.find(p => p.id === Number(id));

  return (
    <div className="detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>
      <button onClick={() => dispatch({ type: "ADD", payload: product })}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
