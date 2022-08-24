import React from 'react';
import { useNavigate } from 'react-router-dom';
import Imghome from '../assets/home_page.png';
import '../pages/home.css';


function Home(){
    return (
        <div>
            <Header/>
            <Main/>  
        </div>
    );
}
const Header =() => {
return(
   <div>
   <header>
    <div class = "containerHome">    
            <nav class = "navegacao">
                <li>Home</li>
                <li>Sobre</li>
                <li>Blog</li>
                <li>Contato</li>
            </nav>
            <div class = "botoes">
                <button class = "botao">Login</button>
                <button class = "botao">Cadastro</button>

            </div>  
    </div> 
    </header>
   </div>
);
}

const Main = () =>{
    const Navigate = useNavigate()
    const GoCourses = () =>{
        Navigate('/cursos')
    }
    return (
       <div>
            <section class = "container2Home">
                <div class = "informacoes">   
                    <h1>
                    Faça login e acesse <br/> a nossa plataforma<br/> de cursos
                    </h1>
                    <p>Caso não tenha uma conta</p>
                    <a href ="/ ">registra-se aqui!</a>
                    <img src ={Imghome} class = "ImageHome"></img>
                </div>    
                <div class = "login">
                    <input placeholder="Email" type ="email"></input>
                    <input placeholder="Senha" type ="password"></input>
                    <button class = "botoes" onClick={GoCourses}>Acessar</button>
                </div>
            </section>
        </div>   
    );
}

export default Home;