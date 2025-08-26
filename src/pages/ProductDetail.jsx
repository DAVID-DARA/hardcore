import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import useProduct from "../hooks/useProduct";
import { urlFor } from "../lib/sanity";
import formatCurrency from "../utils/formatCurrency";
import { useCart } from "../context/CartContext";

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
        <div className="ph" style={{ height: 480, borderRadius: 16 }} />
      </section>
    );
  }
  if (!product) {
    return (
      <section className="section">
        <p>Product not found.</p>
        <Link to="/products" className="btn" style={{ marginTop: 12 }}>
          Back to Shop
        </Link>
      </section>
    );
  }

  const title = product.title || product.name || "Untitled";
  const price = product.price ?? 0;

  // 🔑 handle both single image and array of images
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
    <section
      className="section"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40,
        alignItems: "start",
      }}
    >
      {/* LEFT: Images */}
      <div>
        <div
          style={{
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid #ddd",
            marginBottom: 16,
          }}
        >
          {mainImage ? (
            <img
              src={urlFor(mainImage).width(800).height(1000).url()}
              alt={title}
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : (
            <div
              style={{
                height: "500px",
                background: "#f3f4f6",
                borderRadius: 12,
              }}
            />
          )}
        </div>

        {images.length > 1 && (
          <div
            style={{
              display: "flex",
              gap: 12,
              overflowX: "auto",
              paddingBottom: 8,
            }}
          >
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                style={{
                  flex: "0 0 auto",
                  border:
                    i === activeIndex ? "2px solid black" : "1px solid #ddd",
                  borderRadius: 8,
                  padding: 2,
                  cursor: "pointer",
                  background: "white",
                }}
              >
                <img
                  src={urlFor(img).width(200).height(200).url()}
                  alt={`${title} thumbnail ${i + 1}`}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: 6,
                  }}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT: Product Info */}
      <div>
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: 36,
            marginBottom: 8,
          }}
        >
          {title}
        </h1>
        <div
          style={{
            fontSize: 22,
            fontWeight: "600",
            marginBottom: 16,
            color: "#111827",
          }}
        >
          {formatCurrency(price)}
        </div>

        {product.description && (
          <p style={{ color: "#4b5563", lineHeight: 1.6 }}>
            {product.description}
          </p>
        )}

        <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
          <button
            className="btn"
            onClick={handleAddToCart}
            style={{
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: 6,
              background: "black",
              color: "white",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
          <a
            className="btn outline"
            href={waHref}
            style={{
              padding: "0.75rem 1.5rem",
              border: "1px solid black",
              borderRadius: 6,
              background: "white",
              color: "black",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Contact to Order
          </a>
        </div>

        <div style={{ marginTop: 16 }}>
          <Link
            to="/products"
            className="btn outline"
            style={{
              display: "inline-block",
              marginTop: 12,
              padding: "0.5rem 1rem",
              border: "1px solid #ddd",
              borderRadius: 6,
              textDecoration: "none",
              color: "#374151",
            }}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}
