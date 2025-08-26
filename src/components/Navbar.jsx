import { useState } from "react";
import { Link, NavLink } from "react-router";
import { useCart } from "../context/CartContext";
import { Menu, X } from "lucide-react";
import "../styles/Navbar.css"; // import your CSS

export default function Navbar() {
  const { state } = useCart();
  const count = state.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const companyName = import.meta.env.VITE_COMPANY_NAME;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Center Logo */}
      <div className="logo">
        <Link to="/">{companyName}</Link>
      </div>

      {/* Hamburger Icon */}
      <button
        className="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Links */}
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Shop</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <Link to="/cart" className="cart-btn">Cart ({count})</Link>
      </div>

      {/* Fullscreen Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/products" onClick={() => setIsOpen(false)}>Shop</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        <Link to="/cart" className="cart-btn" onClick={() => setIsOpen(false)}>
          Cart ({count})
        </Link>
      </div>
    </nav>
  );
}
