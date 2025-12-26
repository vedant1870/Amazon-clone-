import { useState } from "react";
import products from "../data/product";
import ProductCard from "../components/ProductCard";

function Home() {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [rating, setRating] = useState("");

  const filteredProducts = products.filter((p) => {
    return (
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (minPrice === "" || p.price >= Number(minPrice)) &&
      (rating === "" || p.rating >= Number(rating))
    );
  });

  return (
    <div className="home">
      <h2>Products</h2>

      {/* SEARCH & FILTER BAR */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Min Rating</option>
          <option value="4">4 ★ & above</option>
          <option value="4.5">4.5 ★ & above</option>
        </select>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid">
        {filteredProducts.length === 0 && <p>No products found</p>}

        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
