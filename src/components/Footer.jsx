export default function Footer(){
    const companyName = import.meta.env.VITE_COMPANY_NAME;

    return (
        <footer className="footer">
            <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span>© {new Date().getFullYear()} {companyName}</span>
                <span style={{fontSize:14}}>Minimal luxury fashion</span>
            </div>
        </footer>
    );
}