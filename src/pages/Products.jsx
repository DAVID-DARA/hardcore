import ProductGrid from '../components/ProductGrid'
import Skeleton from '../components/Skeleton'
import useProducts from '../hooks/useProducts'


export default function Products(){
const { data, loading } = useProducts()
return (
<section className="section">
<div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
<h1 style={{fontFamily:'Playfair Display,serif',fontSize:36}}>Shop</h1>
</div>
{loading ? <Skeleton rows={9}/> : <ProductGrid products={data} />}
</section>
)
}