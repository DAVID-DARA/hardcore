import { Link, NavLink } from 'react-router'
import { useCart } from '../context/CartContext'


export default function Navbar(){
    const { count } = useCart()
    return (
        <nav className="nav">
            <Link to="/" style={{fontWeight:700,fontFamily:'Playfair Display, serif',fontSize:24}}>ModaMuse</Link>
            <ul>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/products">Shop</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div style={{display:'flex',gap:16,alignItems:'center'}}>
                <Link to="/cart" className="btn outline">Cart ({count})</Link>
            </div>
        </nav>
    );
}