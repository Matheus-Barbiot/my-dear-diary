import React, {useState} from "react";
import Header from "../componentes/header";
import Aside from "../componentes/aside";
import Footer from "../componentes/footer";
import mostrarMenu from "../funcoes/mostrar-menu";


export default function Contato(){
    const [menuLateral, menuState] = useState(false)
    return (
        <>
        <div id="contato">
            <Header menuState={menuState}></Header>
            <Aside></Aside>
            {mostrarMenu(menuLateral, menuState)}
            <Footer></Footer>
        </div>
        </>
    )
}