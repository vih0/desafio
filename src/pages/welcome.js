import React from 'react';
import './welcome.css';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';
import card7 from '../assets/card7.png';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';
import avatar5 from '../assets/avatar5.png';
import avatar6 from '../assets/avatar6.png';
import avatar7 from '../assets/avatar7.png';


import {BiBookAlt,BiHeart} from 'react-icons/bi';

// criando cards reutilizaveis 
const Cursos = (props) => {
    return(
      <div class = "container">
           <div class = "card">
                    <img src={props.imagem}></img>
                    <h2>{props.curso}</h2>
                    <div class = "teste">
                    <img src={props.avatar} class="avatar"></img>
                        <p>{props.professor}</p>
                        <span>{props.like}</span>
                    </div>
           </div>
      </div>  
    );
}
// atribuindo os dados a variaveis pra ficar mais facil de manipular
const Dados = (props) => {
    return(
        <div>
            <Cursos imagem={props.imagem} curso={props.curso} avatar={props.avatar} professor={props.professor} like={props.like}/>
        </div>
    );
}
//  imprementando os cards reutilizaveis e dividindo pra ficar facil de estilizar 
function Welcome(){
    return(
        <section class = "container2">
            <p>Seja bem vindo,<br/> <strong>Marcos</strong></p>
            <div class ="filtros">
                <Filtro icon={<BiBookAlt size="20" color="#878787"/>} filter="Recentes" />
                <Filtro icon={<BiBookAlt size="20" color="#878787"/>} filter="Grátis" />
                <Filtro icon={<BiBookAlt size="20" color="#878787"/>} filter="Popular" />
                <Filtro icon={<BiBookAlt size="20" color="#878787"/>} filter="Pagos" />
            </div>

           
            <div class = "cards-box">
                <div class = "cards">
                    <Dados imagem ={card1} curso ="Principle of UI/UX Design ( Beginer )" avatar ={avatar1} professor ="John Doe" like={<BiHeart size= "18" color="black" />}/>
                    <Dados imagem ={card2} curso ="Mastering HTML/CSS With Bootstrap"  avatar ={avatar2} professor ="Alexander" like={<BiHeart size= "18" color="black"/>}/>
                    <Dados imagem ={card3} curso ="Adobe Photoshop Basic to Advance"  avatar ={avatar3} professor ="Danaya" like={<BiHeart size= "18" color="black"/>}/>
                    <Dados imagem ={card3} curso ="Adobe Photoshop Basic to Advance"  avatar ={avatar3} professor ="Danaya" like={<BiHeart size= "18" color="black"/>}/>
                </div>
                <div class = "cards">
                    <Dados imagem ={card5} curso ="Basic to Advence Figma"  avatar ={avatar5} professor ="Emilia" like={<BiHeart size= "18" color="black"/>}/>
                    <Dados imagem ={card6} curso ="React JS Basic to Advance" avatar ={avatar6} professor ="Sonya " like={<BiHeart size= "18" color="black"/>}/>
                    <Dados imagem ={card7} curso ="Mastering JS with Laravel" avatar ={avatar7} professor ="Deny S" like={<BiHeart size= "18" color="black"/>}/>
                    <Dados imagem ={card7} curso ="Mastering JS with Laravel" avatar ={avatar7} professor ="Deny S" like={<BiHeart size= "18" color="black"/>}/> 
                </div>
             </div>
          
        </section>  
        
    );
}
// modelo do filtro de recente,gratis, popular e pago
const Filtro = (props) =>{
      return(
        <section>
            <div class = "filtro">
                {props.icon}
                <p>{props.filter}</p>
            </div>
        </section>     
      );  
} 
 
export default Welcome;