import React from 'react';
import {FiSearch} from 'react-icons/fi';
import{BsGear} from 'react-icons/bs'
import{IoMdNotificationsOutline} from 'react-icons/io'


function BarraPesquisa(){
    return(
        <div class ="barraPesquisa">
            <div class="Icones">
             <IoMdNotificationsOutline size ="20"/>   
            <BsGear size ="20"/>
            </div>
            <FiSearch size ="15" color=" #8D8D8D"/>
            <input type ="text" placeholder ="Pesquisa"></input>
        </div>
    );
}
export default BarraPesquisa;