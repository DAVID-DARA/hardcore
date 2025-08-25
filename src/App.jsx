import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import { CartProvider } from './context/CartContext'


export default function App(){
return (
  <CartProvider>
    <div className="container">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/products/:slug" element={<ProductDetail />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      <Footer />
    </div>
  </CartProvider>
)
}