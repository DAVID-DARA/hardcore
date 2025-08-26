import { Link } from "react-router";
import ProductGrid from "../components/ProductGrid";
import Skeleton from "../components/Skeleton";
import useProducts from "../hooks/useProducts";
import NewIn from "../components/NewIn";
import "../styles/Home.css"; // import CSS

export default function Home() {
  const { products, loading } = useProducts();
  const companyName = import.meta.env.VITE_COMPANY_NAME;

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div>
          <h1>Discover Your Signature Look</h1>
          <p>Curated ready-to-wear pieces with a minimalist luxury touch.</p>
          <Link to="/products" className="btn">Shop Now</Link>
        </div>

        <div
          className="hero-img"
          style={{
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
      <section className="section">
        {loading ? <Skeleton rows={3} /> : <NewIn products={products} />}
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="section featured">
        <div
          className="featured-img"
          style={{
            background: "#f3f4f6 url('https://via.placeholder.com/400x500?text=Featured+1') center/cover no-repeat",
          }}
        />
        <div>
          <h2>Featured Collections</h2>
          <p>Explore timeless pieces curated to inspire confidence and style.</p>
          <Link to="/products" className="btn">Explore</Link>
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
        <h2>{companyName} was created to inspire you</h2>
        <p style={{ color: "#4b5563", maxWidth: 700, margin: "0 auto" }}>
          Our goal is to bring you clothes that blanket you in quality, design,
          and comfort. Elevate your wardrobe with pieces that stand the test of
          time.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="section contact">
        <div>
          <h2>Get in Touch</h2>
          <p>Have questions? Our team is here to help you find your perfect style.</p>
          <Link to="/contact" className="btn">Contact Us</Link>
        </div>
        <div
          className="contact-img"
          style={{
            background: "#f3f4f6 url('https://via.placeholder.com/400x400?text=Contact+Image') center/cover no-repeat",
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
