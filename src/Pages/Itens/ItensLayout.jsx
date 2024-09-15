import { Link, Outlet, useLocation } from "react-router-dom";

export default function ItensLayout(){
    const { pathname} = useLocation()
    return (
        <main>
            <h1>Adr Itens</h1>
            <div className="tabs">
                <Link to="/itens" 
                className={`tab ${pathname === "/itens" ? "active" : ""}`}>Todos os Ítens</Link>
                <Link to="/itens/adicionar" 
                className={`tab ${pathname === "/itens/adicionar" ? "active" : ""}`}>Adicionar Íten</Link>
            </div>
            <Outlet/>
        </main>
    )
}