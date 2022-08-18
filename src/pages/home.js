import React from 'react';
import Imghome from '../assets/home_page.png'
import '../pages/home.css'

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
    <div class = "container">    
            <nav class = "navegacao">
                <li>Home</li>
                <li>Sobre</li>
                <li>Blog</li>
                <li>Contato</li>
            </nav>
            <div class = "botoes">
                <button class = "botaoLogin">Login</button>
                <button class = "botaoCadastro">Cadastro</button>
            </div>  
    </div> 
    </header>
   </div>
);
}

const Main = () =>{
    return (
       <div>
            <section class = "informacoes">
                    <h1>
                    Faça login e acesse 
                    a nossa plataforma
                    de cursos
                    </h1>
                    <p>Caso não tenha uma conta</p>
                    <a href =" ">registra-se aqui!</a>
                <div class = "login">
                    <input placeholder="Email" type ="email"></input>
                    <input placeholder="Senha" type ="password"></input>
                </div>
            </section>
            <img src ={Imghome}></img>
        </div>   
    );
}


export default Home;