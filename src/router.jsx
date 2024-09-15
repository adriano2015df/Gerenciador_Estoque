import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home";
import ListarItens from "./Pages/Itens/ListarItens";
import AdicionarIten from "./Pages/Itens/AdicionarIten";
import MostarIten from "./Pages/Itens/MostrarIten";
import AtualizarIten from "./Pages/Itens/AtualizarIten";
import ItensLayout from "./Pages/Itens/ItensLayout";


const router = createBrowserRouter([{
    path:"/",
    element: <RootLayout/>,
    children: [
        { index: true, element: <Home/> },
        {
            path: "itens",
            element:<ItensLayout/>,
            children:[
                {index: true, element: <ListarItens/> },
                {path: "adicionar", element: <AdicionarIten/> },
                {path: "id", element: <MostarIten/>},
                {path: "id/atualizar", element: <AtualizarIten/>}
            ]
        }
    ]
}])

export default router