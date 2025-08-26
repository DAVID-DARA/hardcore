import { Link } from "react-router";
import client, { urlFor } from "../lib/sanity";
import { formatPrice } from "../utils/format";
import "../styles/productCard.css";

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
    <div className="product-card">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={product.name || product.title || "Product"}
          className="product-image"
        />
      ) : (
        <div
          style={{
            background: "#f3f4f6",
            height: "250px",
            borderRadius: "8px",
            marginBottom: "10px"
          }}
        />
      )}

      <div className="product-title">{product.name || product.title}</div>
      <div className="price">{formatPrice(product.price)}</div>
      <Link
        to={`/products/${product.slug?.current || product._id}`}
        className="btn"
        style={{ marginTop: 12 }}
      >
        View
      </Link>
    </div>
  );
}
