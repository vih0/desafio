import React from 'react';
import './menuLateral.css';
import {RiHome2Fill,RiLogoutBoxRLine} from 'react-icons/ri';
import {BsFillBookmarkFill,BsFillPersonFill,BsFillGearFill,BsFillInfoCircleFill,} from 'react-icons/bs';



const MenuLateral =() => {
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
            <p class="nameL">{props.name}</p>
            <p class="email">{props.Email}</p>
        </div>
    );

}
export default MenuLateral;