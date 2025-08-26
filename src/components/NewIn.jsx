import { Link } from "react-router";
import ProductCard from "./ProductCard";
import "../styles/newIn.css";

export default function NewIn({ products = [] }) {
  // Sort by created date (desc) if available, then take top 3
  const latest = [...products]
    .sort((a, b) => {
      const da = a._createdAt ? new Date(a._createdAt).getTime() : 0;
      const db = b._createdAt ? new Date(b._createdAt).getTime() : 0;
      return db - da;
    })
    .slice(0, 3);

  return (
    <section className="newin">
      <div className="newin__head">
        <h2 className="newin__title">New In</h2>

        <div className="newin__meta">
          <p className="newin__copy">
            Latest drops hand-picked for the season—minimal, elevated, ready to wear.
          </p>
          <div className="newin__filters">
            {["Hoodies", "Jeans & T-Shirts", "T-Shirts", "Jackets"].map((label) => (
              <Link key={label} to="/products" className="pill">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {latest.length === 0 ? (
        <p>No recent products yet.</p>
      ) : (
        <div className="newin__grid">
          {latest.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
