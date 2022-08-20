import React from 'react';
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


import { FaBook} from 'react-icons/fa';

// criando cards reutilizaveis 
const Cursos = (props) => {
    return(
      <div class = "container">
           <div class = "card">
                    <img src={props.imagem}></img>
                    <p>{props.curso}</p>
                    <img src={props.avatar}></img>
                    <p>{props.professor}</p>
           </div>
      </div>  
    );
}
// atribuindo os dados a variaveis pra ficar mais facil de manipular
const Dados = (props) => {
    return(
        <div>
            <Cursos imagem={props.imagem} curso={props.curso} avatar={props.avatar} professor={props.professor }/>
            <Filtro icon={props.icon} filter ={props.filter}/>
        </div>
    );
}
//  imprementando os cards reutilizaveis e dividindo pra ficar facil de estilizar 
function Welcome(){
    return(
        <section class = "container2">
            <p>Seja bem vindo,<br/> <strong>Marcos</strong></p>
                <Filtro icon={<FaBook size="50" color="red"/>} filterName="asdadadasds" />

           
            <div class = "cards-box">
                <div class = "cards">
                    <Dados imagem ={card1} curso ="Principle of UI/UX Design ( Beginer )" avatar ={avatar1} professor ="John Doe"/>
                    <Dados imagem ={card2} curso ="Mastering HTML/CSS With Bootstrap"  avatar ={avatar2} professor ="Alexander"/>
                    <Dados imagem ={card3} curso ="Adobe Photoshop Basic to Advance"  avatar ={avatar3} professor ="Danaya"/>
                    <Dados imagem ={card3} curso ="Adobe Photoshop Basic to Advance"  avatar ={avatar3} professor ="Danaya"/>
                </div>
                <div class = "cards">
                    <Dados imagem ={card5} curso ="Basic to Advence Figma"  avatar ={avatar5} professor ="Emilia"/>
                    <Dados imagem ={card6} curso ="React JS Basic to Advance" avatar ={avatar6} professor ="Sonya "/>
                    <Dados imagem ={card7} curso ="Mastering JS with Laravel" avatar ={avatar7} professor ="Deny S"/>
                    <Dados imagem ={card7} curso ="Mastering JS with Laravel" avatar ={avatar7} professor ="Deny S"/>
                </div>
            </div>
        </section>    
    );
}
const Filtro = (props) =>{
      return(
        <section>
            <div>
                {props.icon}
                <h3>{props.filter}</h3>
            </div>
        </section>     
      );  
} 
export default Welcome;