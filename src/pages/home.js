import React from "react";
import { Link } from 'react-router-dom';
function Home(){
    return(
        <>
        <div id="home">
            <header>
                <div id="row1">
                    <a href="#"></a>
                    <button></button>
                </div>
                <div id="row2">
                    <p>My Dear Diary, o seu espaço seguro para expressar, refletir e crescer</p>
                    <button>Começar</button>
                </div>
            </header>
            <nav>
                <button>esconder</button>
                <ul>
                    <li><Link to='/'>Página inicial</Link></li>
                    <li><Link to='/sobre'>Sobre</Link></li>
                    <li><Link to='/contato'>Contato</Link></li>
                </ul>
            </nav>
            <main id="algo">

            </main>
        </div>
        </>
    )
}

export default Home