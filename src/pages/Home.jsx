import { Link } from 'react-router'
import ProductGrid from '../components/ProductGrid'
import Skeleton from '../components/Skeleton'
import useProducts from '../hooks/useProducts'


export default function Home(){
    const { data, loading } = useProducts()
    return (
        <>
            <section className="hero">
                <div>
                    <h1>Discover Your Signature Look</h1>
                    <p>Curated ready-to-wear pieces with a minimalist luxury touch.</p>
                    <Link to="/products" className="btn">Shop Now</Link>
                </div>
                <div className="ph" style={{borderRadius:16}} />
            </section>


            <section className="section">
                <h2 style={{fontFamily:'Playfair Display,serif',fontSize:32,marginBottom:16}}>New Arrivals</h2>
                    {loading ? <Skeleton rows={6}/> : <ProductGrid products={data} />}
            </section>
        </>
    );
}