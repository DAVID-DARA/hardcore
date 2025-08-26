import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import useProduct from "../hooks/useProduct";
import { urlFor } from "../lib/sanity";
import formatCurrency from "../utils/formatCurrency";
import { useCart } from "../context/CartContext";
import "../styles/ProductDetail.css";

export default function ProductDetail() {
  const { slug } = useParams();
  const { product, loading } = useProduct(slug);
  const { dispatch } = useCart();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  useEffect(() => setActiveIndex(0), [slug]);

  if (loading) {
    return (
      <section className="section">
        <div className="ph skeleton" />
      </section>
    );
  }
  if (!product) {
    return (
      <section className="section">
        <p>Product not found.</p>
        <Link to="/products" className="btn">
          Back to Shop
        </Link>
      </section>
    );
  }

  const title = product.title || product.name || "Untitled";
  const price = product.price ?? 0;

  // Handle both single and array images
  const images = Array.isArray(product.images)
    ? product.images
    : product.image
    ? [product.image]
    : [];

  const mainImage = images[activeIndex];

  const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const waText = `Hello, I'm interested in "${title}" (${formatCurrency(price)}).`;
  const waHref = waNumber
    ? `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`
    : "/contact";

  return (
    <section className="product-detail">
      {/* LEFT: Images */}
      <div className="product-gallery">
        <div className="main-image">
          {mainImage ? (
            <img
              src={urlFor(mainImage).width(800).height(1000).url()}
              alt={title}
            />
          ) : (
            <div className="placeholder" />
          )}
        </div>

        {images.length > 1 && (
          <div className="thumbnails">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`thumb-btn ${i === activeIndex ? "active" : ""}`}
              >
                <img
                  src={urlFor(img).width(200).height(200).url()}
                  alt={`${title} thumbnail ${i + 1}`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT: Info */}
      <div className="product-info">
        <h1>{title}</h1>
        <div className="price">{formatCurrency(price)}</div>

        {product.description && <p className="description">{product.description}</p>}

        <div className="actions">
          <button className="btn primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <a href={waHref} className="btn outline">
            Contact to Order
          </a>
        </div>

        <Link to="/products" className="btn outline continue">
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}
