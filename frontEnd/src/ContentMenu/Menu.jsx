//pendiente 
//                                                                                  <Jeffry guerrero>
//mejorar la experiencia y poder incluir mas ojetos on forme el usuario requuiera
//incluir un sistema para integrar imagenes automaticamente

//importar los estilos 
import style from "./menu.module.css"
//importamos las imagenes 
import pizza from "../assets/imagenes/pizzaMenu.png";
import burrito from "../assets/imagenes/BurritoMenu.png";
import hamburguesa from "../assets/imagenes/hamburguesaMenu.png";
import nuggets from "../assets/imagenes/NugguetsPolloMenu.png";
import papas from "../assets/imagenes/PapasFritasMenu.png";
import hotdog from "../assets/imagenes/HotDogMenu.png"
import malteadaVainilla from "../assets/imagenes/malteada-vainilla.png"
import malteada from "../assets/imagenes/malteada.png"
import sandwich from "../assets/imagenes/sandwich.png"
import proteina from "../assets/imagenes/proteina.png"
import pepsi from "../assets/imagenes/pepsi.png"

//guardamos las ubicaciones de las imagenes en un objeto Json

var listaComida = [ {name: "pizza", src: pizza, price : 20000},
                    {name: "burrito", src: burrito, price : 5000},
                    {name: "papas", src: papas, price : 7000},
                    {name: "hamburguesa", src: hamburguesa, price : 15000},
                    {name: "nuggets", src: nuggets, price : 13000},
                    {name: "hotdog", src: hotdog, price : 8000},
                    {name: "malteadaVainilla", src:malteadaVainilla, price : 4000},
                    {name: "malteada", src: malteada, price : 4000},
                    {name: "sandwich", src: sandwich, price : 4000},
                    {name: "proteina", src: proteina, price : 50000},
                    {name: "pepsi", src: pepsi, price : 300000000},
                    //implementar un sistema para añadir mas en el futuo                    
                ]

const Card = ({ item }) => {
    return (
      <div className={style.card}>
        <h2>{item.name}</h2>
        <img src={item.src} alt={item.name} />  <br />
        <label htmlFor="precio">Cop: {item.price}</label>     
      </div>
    );
  };

function Content2(){
    return(<main className={style.contenedor}>
        <form className={style.gridContainer}>
            <h2>Lista de alimentos</h2>
            {listaComida.map((item)=>(
                <Card key={item.index} item={item} />
            ))}                    
        </form>
        

    </main>);
}

export default Content2