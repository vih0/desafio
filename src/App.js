import React from 'react';
const Equipe = (props) => {
  return(
    <div>
      <Sobre nome = {props.nome} idade={props.idade} cargo = {props.cargo}/> 
    </div>
  );
}
const Sobre = (props) => {
    return(

      <div>
      <p>oi sou {props.nome} tenho {props.idade} e sou {props.cargo}</p>
    </div>
      );
}
function App(){
  return(
    <div>
      <h1>Lista de Equipe </h1>
        <Icone/>
    </div>
  );
}
const Icone = ()=>{
  return(
    <div>
        
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14.7156" cy="15.2406" r="14.6844" fill="#878787"/>
    </svg>
    </div>
  );
}

export default App;