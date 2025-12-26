import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p className="price">₹{product.price}</p>
      <p className="rating">⭐ {product.rating}</p>
      <Link className="btn" to={`/product/${product.id}`}>
        View Product
      </Link>
    </div>
  );
}

export default ProductCard;
