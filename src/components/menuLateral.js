import React from 'react';
import {RiHome2Fill,RiLogoutBoxRLine} from 'react-icons/ri';
import {BsFillBookmarkFill,BsFillPersonFill,BsFillGearFill,BsFillInfoCircleFill,} from 'react-icons/bs';



function MenuLateral(){
    return(
        <div>
            <div class ="conteudoLateral">
                    <Information name ="Marcos" Email ="marcos@gmail.com"/>
                <nav class = "navegacaoLateral">
                    <li><RiHome2Fill/>Home</li>
                    <li><BsFillBookmarkFill/>Cursos</li>
                    <li><BsFillPersonFill/>Perfil</li>
                    <li><BsFillGearFill/>Configurações</li>
                    <li><BsFillInfoCircleFill/>Sobre</li>
                    <li><RiLogoutBoxRLine/>Sair</li>

                </nav>
            </div>
        </div>
    );
}
const Information = (props) =>{
    return(
        <div class = "Information">
            <p>{props.name}<br/>{props.Email}</p>
        </div>
    );

}
export default MenuLateral;