import React from 'react';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';
import card7 from '../assets/card7.png';

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
        </div>
    );
}
//  imprementando os cards reutilizaveis e dividindo pra ficar facil de estilizar 
function Welcome(){
    return(
        <section>
            <p>Seja bem vindo,<br/> <strong>Marcos</strong></p>
            <div class = "cards-box">
                <div class = "cards">
                    <Dados imagem ={card1} curso ="Principle of UI/UX Design ( Beginer )" professor ="John Doe"/>
                    <Dados imagem ={card2} curso ="Mastering HTML/CSS With Bootstrap" professor ="Alexander"/>
                    <Dados imagem ={card3} curso ="Adobe Photoshop Basic to Advance" professor ="Danaya"/>
                    <Dados imagem ={card3} curso ="Adobe Photoshop Basic to Advance" professor ="Danaya"/>
                </div>
                <div class = "cards">
                    <Dados imagem ={card5} curso ="Basic to Advence Figma" professor ="Emilia"/>
                    <Dados imagem ={card6} curso ="React JS Basic to Advance" professor ="Sonya "/>
                    <Dados imagem ={card7} curso ="Mastering JS with Laravel" professor ="Deny S"/>
                    <Dados imagem ={card7} curso ="Mastering JS with Laravel" professor ="Deny S"/>
                </div>
            </div>
        </section>    
    );
}
const Filtro = (props) =>{
      return(
        <section>
            <div>

            </div>
        </section>     
      );  
} 
export default Welcome;