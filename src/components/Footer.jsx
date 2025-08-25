export default function Footer(){
    return (
        <footer className="footer">
            <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span>© {new Date().getFullYear()} ModaMuse</span>
                <span style={{fontSize:14}}>Minimal luxury fashion</span>
            </div>
        </footer>
    );
}