import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./compForo.module.css"

const URL = "http://localhost:8000/Ops/"

const CompCreatePost = ()=>{
    const [name, setName] = useState("")
    const [opinion, setOpinion] = useState("")
    const navigate = useNavigate()
    //guardar post 

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URL, {name:name, opinion:opinion})
        navigate("/")
    }
    return(<div>
        <h2 className={style.titlePostear}>Crear Post</h2>
        <form onSubmit={store}>
            <div>
                <label htmlFor="">Nombre</label> <br />
                <input value={name} onChange={(e)=> setName(e.target.value)}type="text" className={style.boxNombre}/></div> <br />
            <div className={style.divArea}>
                <label htmlFor="">Opinion</label><br />            
                <textarea value={opinion} onChange={(e)=> setOpinion(e.target.value)}type="text" className={style.boxTexto} />
            </div><br />
            <button type="submit" className={style.botonSubir}>Subir opinion</button>
        </form>
    </div>)
}
export default CompCreatePost