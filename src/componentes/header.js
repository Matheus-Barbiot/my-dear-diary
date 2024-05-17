import React from "react";

export default function Header(props){
    return (
        <>
        <header>
            <a href="/"></a>
            <button onClick={()=>props.menuState(true)}></button>
        </header>
        </>
    )
}