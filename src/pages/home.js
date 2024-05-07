import React, {useState} from "react";
import Menu from "../componentes/menu-lateral";
import Header from "../componentes/header";
import Main from "../componentes/Home/main";
import Footer from "../componentes/footer";

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
            <Footer />
        </div>
        </>
    )
}

export default Home