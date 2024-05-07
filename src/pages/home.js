import React, {useState} from "react";
import Menu from "../componentes/menu-lateral";
import Header from "../componentes/header";
import Main from "../componentes/main";
function Home(){
    const [menuLateral, menuState] = useState(false)
    function mostrarMenu(){
        if(menuLateral === true){
            return <Menu menuState={menuState}></Menu>
        } else {
            return null
        }
    }
    return(
        <>
        <div id="home">
            <Header menuState={menuState} />
            <Main />
            {mostrarMenu()}
        </div>
        </>
    )
}

export default Home