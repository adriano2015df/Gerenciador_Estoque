import { Link, Outlet } from "react-router-dom";


export default function RootLayout(){
    return(
        <>
        <header>
            <Link to="/" className="logo">ADR GERENCIADOR DE ESTOQUE</Link>
            <nav>
                <Link to="/">Início</Link>
                <Link to="/itens">Itens</Link>
            </nav>
        </header>
        <div>
            <Outlet/>
        </div>
        <footer>
            Programado por Adriano Alves @2024
        </footer>
        </>
    )
}