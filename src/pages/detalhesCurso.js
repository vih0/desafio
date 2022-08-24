import React from 'react';
import MenuLateral from '../../src/components/menuLateral';
import BarraPesquisa from '../components/barraPesquisa';
import './detalhesCurso.css';

const DetalhesPage = ()=>{
    
    return(
        <div class="ConteudoPrincipal">
        <MenuLateral/>
        <div class ="detalhes">
            <h1>Cursos</h1>
            <h2>Principle of UI/UX Design ( Beginer )</h2>
            <span>Tutor: John Doe</span>
            
            <p>Aprenda a executar pesquisas de UX Design, 
            fazer testes de usabilidade e elaborar análises, 
            além de utilizar frameworks e métodos para a 
            criação de designs de qualidade e que ofereçam 
            uma boa experiência ao usuário.</p>
            <button>Acessar</button>
        </div> 
        <BarraPesquisa/>
        </div>
    );
}
export default DetalhesPage;