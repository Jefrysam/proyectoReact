/*impotamos los estilos a usar*/
import style from "./Content1.module.css"

/*importamos las imagenes a usar*/
import pizza from "../assets/imagenes/pizzaMenu.png";
import burrito from "../assets/imagenes/BurritoMenu.png";
import hamburguesa from "../assets/imagenes/hamburguesaMenu.png";
import nuggets from "../assets/imagenes/NugguetsPolloMenu.png";
import papas from "../assets/imagenes/PapasFritasMenu.png";
import hotdog from "../assets/imagenes/HotDogMenu.png";
import logo from "../assets/imagenes/logo.png"


/*contenido a mostrar en el apartado inicio*/
function Content1(){
    return (<main className={style.contenido}>
                <p className={style.parrafo}>
                    ¡Descubre una experiencia culinaria sin igual desde
                    la comodidad de tu hogar con nuestro restaurante en
                    línea de comida rápida! En DATE GUSTO,
                    llevamos la deliciosa diversidad de sabores
                    directamente a tu puerta, ¡haciendo que cada comida
                    sea una celebración para tus papilas gustativas!
                </p>    
                <img className={style.logo} src={logo} alt="logo" />        
                <div className={style.listaImg}>
                    <div className={style.tag}><img src={pizza} alt="pizzaMenu"></img></div>
                    <div className={style.tag}><img src={burrito} alt="BurritoMenu"></img></div>
                    <div className={style.tag}><img src={hamburguesa} alt="hamburguesaMenu"></img></div>
                    <div className={style.tag}><img src={nuggets} alt="NugguetsPolloMenu"></img></div>
                    <div className={style.tag}><img src={papas} alt="PapasFritasMenu"></img></div>
                    <div className={style.tag}><img src={hotdog} alt="HotDogMenu"></img></div>
                    <div className={style.tag}><img src={pizza} alt="pizzaMenu"></img></div>
                    <div className={style.tag}><img src={pizza} alt="pizzaMenu"></img></div>
                    <div className={style.tag}><img src={pizza} alt="pizzaMenu"></img></div>
                    <div className={style.tag}><img src={pizza} alt="pizzaMenu"></img></div>                   
                </div>                
                <div className={style.fade}></div>
            </main>);            
}

export default Content1