import React, { useState } from "react";

/*se importan los elemetos creados*/

import Content1 from "./Content1/Content1";
import Content2 from "./ContentMenu/Menu";
import Content3 from "./ContentNosotros/Nosotros";
import Content4 from "./ContentLogIn/LogIn";
import Content5 from "./foroprox/compForo";

                                                      // Defino las ventanas que se mostraran:   <Jeffry Guerrero>
                                                      // El componente Header siempre se va a mostrar asi que lo genero directamente aqui

const Home = () => <div><Content1 /></div>;           // El content 1 es la pagina principal
const Menu = ()=> <div> <Content2 /></div>;           // El content 2 es la pagina de "menu"
const About = () => <div><Content3 /></div>;          // El content 3 sera la pagina de "nosotros"
const SigIn = () => <div><Content4 /></div>;          // El content 3 sera la pagina de "iniciar sesion"
const Foro = () => <div><Content5 /></div>                       


function App() {

  const [activeComponent, setActiveComponent] = useState("Home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Home":
        return <Home />;
      case "Menu":
        return <Menu />;
      case "About":
        return <About />
      case "sigIn":
        return <SigIn />
      case "foro":
        return <Foro />
      default:
        return <Home />;
    }
  };



  return (
    <>
      <header className="Header">
        <h1 className="Titulo">date gusto</h1>
        <nav className="barraNav">
          <button onClick={()=> setActiveComponent ("home")}>Inicio</button>
          <button onClick={()=> setActiveComponent ("Menu")}>menu</button>
          <button onClick={()=> setActiveComponent ("foro")}>foro</button>
          <button onClick={()=> setActiveComponent ("About")}>nosotros</button>
          <button onClick={()=> setActiveComponent ("sigIn")}>Inciar sesion</button>          
        </nav>
      </header>
      {renderComponent()}
    </>
  );
}

export default App
