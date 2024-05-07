import React from "react";
import { Link } from "react-router-dom";
import Frases from "./frases";
import Perguntas from "./perguntas";

export default function Main() {
    return (
        <>
            <main id="mainHome">
                <section id="inicio">
                    <p>My Dear Diary, o seu diario virtual para expressar, refletir e crescer</p>
                    <button><Link className="botaoLink" to="/dear">escrever</Link></button>
                </section>
                <section id="textos">
                    <Frases />
                    <Perguntas />
                </section>
                <section id='conclusao'>
                    <p>O que achou?</p>
                    <button onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })}>testar</button>
                </section>
            </main>
        </>
    );
}
