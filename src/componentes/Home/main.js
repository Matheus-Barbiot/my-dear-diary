import React, { useState, useEffect } from "react";
import Frases from "./frases";
import Perguntas from "./perguntas";
export default function Main() {

    return (
        <>
            <div id="mainHome">
                <section id="inicio">
                    <p>My Dear Diary, o seu diario virtual para expressar, refletir e crescer</p>
                    <button>Login</button>
                </section>
                <section id="textos">
                    <Frases />
                    <Perguntas />
                </section>
            </div>
        </>
    );
}
