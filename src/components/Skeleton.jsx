export default function Skeleton({ rows = 6 }){
    return (
        <div className="grid">
            {Array.from({length: rows}).map((_,i)=> (
                <div key={i} className="card">
                    <div className="ph" />
                    <div className="product-title" style={{height:20,background:'#f3f4f6',borderRadius:6}} />
                    <div className="price" style={{height:16,background:'#f3f4f6',borderRadius:6,marginTop:8}} />
                </div>
            ))}
        </div>
    );
}