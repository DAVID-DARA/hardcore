import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import useProduct from "../hooks/useProduct";
import { urlFor } from "../lib/sanity";
import formatCurrency from "../utils/formatCurrency";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { slug } = useParams();
  const { product, loading } = useProduct(slug);
  const { addToCart } = useCart();
  const [activeIndex, setActiveIndex] = useState(0);

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
  const images = Array.isArray(product.images) ? product.images : [];
  const mainImage = images[activeIndex];

  const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER; // e.g., 234XXXXXXXXXX
  const waText = `Hello, I'm interested in "${title}" (${formatCurrency(
    price
  )}).`;
  const waHref = waNumber
    ? `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`
    : "/contact";

  return (
    <section
      className="section"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}
    >
      <div className="card">
        <div className="ph" style={{ height: 520, borderRadius: 12 }}>
          {mainImage ? (
            <img
              src={urlFor(mainImage).width(1000).height(1200).url()}
              alt={title}
            />
          ) : null}
        </div>

        {images.length > 1 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5,1fr)",
              gap: 8,
              marginTop: 12,
            }}
          >
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                style={{
                  border:
                    i === activeIndex
                      ? "2px solid var(--primary)"
                      : "1px solid var(--border)",
                  borderRadius: 8,
                  padding: 2,
                  background: "#fff",
                  cursor: "pointer",
                }}
                aria-label={`Select image ${i + 1}`}
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

      <div>
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: 40,
            margin: "0 0 8px",
          }}
        >
          {title}
        </h1>
        <div className="price" style={{ fontSize: 20, marginBottom: 16 }}>
          {formatCurrency(price)}
        </div>
        {product.description && (
          <p style={{ color: "#4b5563", lineHeight: 1.7 }}>
            {product.description}
          </p>
        )}

        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          <button className="btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <a className="btn outline" href={waHref}>
            Contact to Order
          </a>
        </div>

        <div style={{ marginTop: 16 }}>
          <Link to="/products" className="btn outline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}
