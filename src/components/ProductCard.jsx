import { Link } from "react-router";
import client, { urlFor } from "../lib/sanity";
import { formatPrice } from "../utils/format";
import "../styles/ProductCard.css"

export default function ProductCard({ product }) {
  if (!product) return null;

  const imgSource = product.image || (product.images && product.images[0]) || null;

  let imageUrl = null;
  try {
    if (imgSource) {
      imageUrl = urlFor(imgSource).width(800).height(800).auto("format").url();
    }
  } catch (err) {
    console.warn("Failed building image URL for product:", product._id, err);
    imageUrl = null;
  }

  return (
    <div className="card">
      <div className="ph">
        {imageUrl ? (
          <img src={imageUrl} alt={product.name || product.title || "Product"} />
        ) : (
          <div style={{ background: "#f3f4f6", height: "100%", borderRadius: 12 }} />
        )}
      </div>

      <div className="product-title">{product.name || product.title}</div>
      <div className="price">{formatPrice(product.price)}</div>
      <Link to={`/products/${product.slug?.current || product._id}`} className="btn" style={{ marginTop: 12 }}>
        View
      </Link>
    </div>
  );
}
