import { Link } from "react-router";
import ProductGrid from "../components/ProductGrid";
import Skeleton from "../components/Skeleton";
import useProducts from "../hooks/useProducts";
import NewIn from "../components/NewIn";

export default function Home() {
  const { products, loading } = useProducts();
  const companyName = import.meta.env.VITE_COMPANY_NAME;

  return (
    <>
      {/* HERO */}
      <section
        className="hero"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "center",
          padding: "4rem 2rem",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 48,
              fontFamily: "Playfair Display, serif",
              marginBottom: 16,
            }}
          >
            Discover Your Signature Look
          </h1>
          <p style={{ fontSize: 18, marginBottom: 24, color: "#374151" }}>
            Curated ready-to-wear pieces with a minimalist luxury touch.
          </p>
          <Link
            to="/products"
            className="btn"
            style={{
              padding: "0.75rem 1.5rem",
              background: "black",
              color: "white",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            Shop Now
          </Link>
        </div>

        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            height: "500px",
            background: "#e5e7eb url('https://via.placeholder.com/500x500?text=Hero+Image') center/cover no-repeat",
          }}
        />
      </section>

      {/* PROMO STRIP */}
      <div
        style={{
          background: "black",
          color: "white",
          textAlign: "center",
          padding: "0.75rem",
          fontWeight: 600,
          letterSpacing: 1,
        }}
      >
        GET 50% OFF • GET 50% OFF • GET 50% OFF
      </div>

      {/* NEW ARRIVALS */}
      {/* <section className="section" style={{ padding: "4rem 2rem" }}>
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: 32,
            marginBottom: 24,
          }}
        >
          New In
        </h2>
        {loading ? <Skeleton rows={3} /> : <ProductGrid products={products} />}
      </section> */}

    <section className="section">
        {loading ? <Skeleton rows={3} /> : <NewIn products={products} />}
      </section>

      {/* FEATURED COLLECTIONS */}
      <section
        className="section"
        style={{
          padding: "4rem 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          alignItems: "center",
        }}
      >
        <div
          style={{
            background:
              "#f3f4f6 url('https://via.placeholder.com/400x500?text=Featured+1') center/cover no-repeat",
            height: 400,
            borderRadius: 12,
          }}
        />
        <div>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: 28,
              marginBottom: 16,
            }}
          >
            Featured Collections
          </h2>
          <p style={{ color: "#4b5563", marginBottom: 24 }}>
            Explore timeless pieces curated to inspire confidence and style.
          </p>
          <Link
            to="/products"
            className="btn"
            style={{
              padding: "0.75rem 1.5rem",
              background: "black",
              color: "white",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            Explore
          </Link>
        </div>
      </section>

      {/* BRAND STORY */}
      <section
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          background: "#fafafa",
        }}
      >
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: 28,
            marginBottom: 16,
          }}
        >
          MudaMuse was created to inspire you
        </h2>
        <p style={{ color: "#4b5563", maxWidth: 700, margin: "0 auto" }}>
          Our goal is to bring you clothes that blanket you in quality, design,
          and comfort. Elevate your wardrobe with pieces that stand the test of
          time.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          padding: "4rem 2rem",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: 28,
              fontFamily: "Playfair Display, serif",
              marginBottom: 16,
            }}
          >
            Get in Touch
          </h2>
          <p style={{ color: "#4b5563", marginBottom: 24 }}>
            Have questions? Our team is here to help you find your perfect
            style.
          </p>
          <Link
            to="/contact"
            className="btn"
            style={{
              padding: "0.75rem 1.5rem",
              background: "black",
              color: "white",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            Contact Us
          </Link>
        </div>
        <div
          style={{
            borderRadius: 12,
            height: 400,
            background:
              "#f3f4f6 url('https://via.placeholder.com/400x400?text=Contact+Image') center/cover no-repeat",
          }}
        />
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "black",
          color: "white",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <p>© {companyName} {new Date().getFullYear()} — All rights reserved.</p>
      </footer>
    </>
  );
}
