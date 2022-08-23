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
                    <li><span><RiHome2Fill/></span> Home</li>
                    <li><span><BsFillBookmarkFill/></span> Cursos</li>
                    <li><span><BsFillPersonFill/> </span>Perfil</li>
                    <li><span><BsFillGearFill/> </span>Configurações</li>
                    <li><span><BsFillInfoCircleFill/></span> Sobre</li>
                    <li><span><RiLogoutBoxRLine/></span> Sair</li>

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