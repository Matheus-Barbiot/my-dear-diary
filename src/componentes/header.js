import React from "react";

export default function Header(props){
    return (
        <>
        <div id="header">
            <a href="#"></a>
            <button onClick={()=>props.menuState(true)}></button>
        </div>
        </>
    )
}