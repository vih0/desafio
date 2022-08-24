import Welcome from "./pages/welcome";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/home";
const Rotas =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cursos" element={<Welcome/>}/>


            </Routes>
        </BrowserRouter>
    );
}
export default Rotas;