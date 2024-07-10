// importar las librerias 
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import style from "./compForo.module.css"
//definir la url del back-end
const URL = "http://localhost:8000/Ops/"

const CompEditPost =()=>{
    const [name, setName] = useState("")
    const [opinion, setOpinion] = useState("")
    const navigate = useNavigate()

    const {id} = useParams()
    //actualizar 
    const update = async (e)=>{
        e.preventDefault()
        await axios.put(URL+id,{name: name, opinion:opinion})
        navigate("/")
    }
    useEffect(()=>{
        getOpById()
    },[])
    const getOpById = async ()=>{
        const res = await axios.get(URL+id)
        setName(res.data.name)
        setOpinion(res.data.opinion)
    }
    return(<div>
        <h2 className={style.titlePostear}>Editar Post</h2>
        <form onSubmit={update}>
            <div>
                <label htmlFor="">Nombre</label> <br />
                <input value={name} onChange={(e)=> setName(e.target.value)}type="text" className={style.boxNombre}/></div><br />
            <div>
                <label htmlFor="">opinion</label><br />         
                <textarea value={opinion} onChange={(e)=> setOpinion(e.target.value)}type="text" className={style.boxTexto}/>
            </div>
            <button type="submit" className={style.botonSubir}>Editar opinion</button>
        </form>
    </div>)
}

export default CompEditPost