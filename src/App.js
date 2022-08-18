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
      <Equipe nome = "eu " idade ="15" cargo = "estudante" />
    </div>
  );
}
export default App;