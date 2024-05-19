import React from "react";
import { Link } from "react-router-dom";
import Frases from "./frases";
import Perguntas from "./perguntas";
import Aside from "../aside";

export default function Main() {
    return (
        <>
            <main id="mainHome">
                <section id="inicio">
                    <p>My Dear Diary, o seu diario virtual para expressar, refletir e crescer</p>
                    <button><Link className="botaoLink" to="/diary">escrever</Link></button>
                </section>
                <section id="textos">
                    <Frases />
                    <Perguntas />
                </section>
                <Aside />
            </main>
        </>
    );
}
