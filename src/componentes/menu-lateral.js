import React from "react";
import { Link } from 'react-router-dom';

export default function Menu(props) {
    return (
        <>
        <nav>
            <button onClick={()=>props.menuState(false)}> </button>
            <div id="foto"></div>
            <p id='nome'>Usuário</p>
            <p className="op"><Link className="link" to='/diary'>Meu diario</Link></p>
            <p className="op"><Link className="link" to='/'>Página inicial</Link></p>
        </nav>
        </>
    )
}