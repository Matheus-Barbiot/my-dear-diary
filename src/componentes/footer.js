import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <>
        
        <footer>
            
            <div id="autor">
                <h2>My Dear Diary:</h2>
                <p>Site criado por:</p>
                <a href="https://github.io/matheus-barbiot/">Matheus Barbiot</a>
            </div>
            <div id="links">
                <h2>Links:</h2>
                <ul>
                    <li>
                        <Link to='/'>Pagina Inicial</Link> <br />
                    </li>
                    <li>
                        <Link to='/dear'>Meu diário</Link> <br />
                    </li>
                    <li>
                        <Link to='/sobre'>Sobre</Link> <br />
                    </li>
                    <li>
                        <Link to='/contato'>Contato</Link> <br />
                    </li>
                </ul>
            </div>
        </footer>
        </>
    )
}