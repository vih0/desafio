import React from 'react';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';
import card7 from '../assets/card7.png';


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
const Dados = (props) => {
    return(
        <div>
            <Cursos imagem={props.imagem} curso={props.curso} avatar={props.avatar} professor={props.professor }/>
        </div>
    );
}

function Welcome(){
    return(
        <div class = "container">
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
    );
}
export default Welcome;