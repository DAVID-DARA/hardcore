import ProductCard from './ProductCard'


export default function ProductGrid({ products = [] }){
    if(products.length === 0){
        return <p style={{color:'#6b7280'}}>No products yet. Add some in Sanity Studio.</p>
    }
    return (
        <div className="grid">
            {products.map(p => (
                <ProductCard key={p._id} product={p} />
            ))}
        </div>
    );
}