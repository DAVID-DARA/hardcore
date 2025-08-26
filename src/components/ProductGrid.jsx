import ProductCard from "./ProductCard";
import "../styles/productGrid.css";

export default function ProductGrid({ products }) {
  
  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
