import React, {useState, useEffect} from "react";

export default function Frases(){
    const frases = [
        "Comece sua jornada de auto-conhecimento aqui.",
        "Bem vindo, esta é a área do seu refúgio pessoal.",
        "Cada página conta uma história."
    ];

    const [fraseAtual, setFraseAtual] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFraseAtual((prevFrase) => (prevFrase + 1) % frases.length);
        }, 5000); // Altere o tempo de exibição de cada frase aqui (em milissegundos)

        return () => clearInterval(interval);
    }, []);
    
    return (
        <>
        <div className="frase" style={{ transition: 'opacity 0.5s ease-in-out' }}>
            <p>{frases[fraseAtual]}</p>
        </div>
        </>
    )
}