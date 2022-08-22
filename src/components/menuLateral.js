import React from 'react';
import {RiHome2Fill,RiLogoutBoxRLine} from 'react-icons/ri';
import {BsFillBookmarkFill,BsFillPersonFill,BsFillGearFill,BsFillInfoCircleFill,} from 'react-icons/bs';



function MenuLateral(){
    return(
        <div>
            <div>
                <nav>
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
export default MenuLateral;