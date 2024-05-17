import React from "react";

export default function Aside(){
    return (
        <>
        <aside id='conclusao'>
            <p>Quer tentar?</p>
            <button onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })}>testar</button>
        </aside>
        </>
    )
}