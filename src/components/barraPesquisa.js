import React from 'react';
import {FiSearch} from 'react-icons/fi';
import{BsGear} from 'react-icons/bs'
import{IoMdNotificationsOutline} from 'react-icons/io'
import './barraPesquisa.css';


function BarraPesquisa(){
    return(
        <div class ="barraPesquisa">
            <div class="Icones">
             <IoMdNotificationsOutline size ="20" color =" #808080"/>   
            <BsGear size ="20" color = "#808080"/>
            </div>
            <div class = "search">
            <FiSearch size ="15" color=" #8D8D8D"/>
            <input type ="text" placeholder ="Pesquisa" ></input>
            </div>
        </div>
    );
}
export default BarraPesquisa;