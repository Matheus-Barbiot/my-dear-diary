import React, {useState} from "react";
import Header from "../componentes/header";
import Main from "../componentes/Home/main";
import Footer from "../componentes/footer";
import mostrarMenu from "../funcoes/mostrar-menu";

function Home(){
    const [menuLateral, menuState] = useState(false)
    return(
        <>
        <div id="home">
            <Header menuState={menuState} />
            <Main />
            {mostrarMenu(menuLateral, menuState)}
            <Footer />
        </div>
        </>
    )
}

export default Home