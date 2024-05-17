import React from "react";
import Menu from "../componentes/menu-lateral";

export default function mostrarMenu(menuLateral, menuState){
    if(menuLateral === true){
        return <Menu menuState={menuState}></Menu>
    } else {
        return null
    }
}