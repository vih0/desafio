import Welcome from "./pages/welcome";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/home";
import DetalhesPage from './pages/detalhesCurso';
const Rotas =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                    <Route path="/cursos" element={<Welcome/>}/>
                    <Route path="/detalhes" element={<DetalhesPage/>}/>


            </Routes>
        </BrowserRouter>
    );
}
export default Rotas;