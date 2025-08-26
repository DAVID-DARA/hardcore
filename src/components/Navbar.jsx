// Navbar.jsx (fix for reducer version)
import { Link, NavLink } from "react-router";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { state } = useCart();
  const count = state.cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="nav">
      <Link
        to="/"
        style={{ fontWeight: 700, fontFamily: "Playfair Display, serif", fontSize: 24 }}
      >
        Hardcore
      </Link>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/products">Shop</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Link to="/cart" className="btn outline">Cart ({count})</Link>
      </div>
    </nav>
  );
}
