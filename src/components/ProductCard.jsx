import { Link } from 'react-router'
import { urlFor } from '../lib/sanity'
import { formatPrice } from '../utils/format'


export default function ProductCard({ product }){
    const cover = product?.images?.[0]
    return (
        <div className="card">
            <div className="ph">{cover ? <img src={urlFor(cover).width(800).height(1000).url()} alt={product.title} /> : null}</div>
            <div className="product-title">{product.title}</div>
            <div className="price">{formatPrice(product.price)}</div>
            <Link to={`/products/${product.slug?.current}`} className="btn" style={{marginTop:12}}>View</Link>
        </div>
    );
}