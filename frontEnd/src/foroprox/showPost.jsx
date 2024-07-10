import axios from "axios";
import { useState, useEffect } from "react";
import style from "./compForo.module.css"
import {Link } from "react-router-dom"

const URL = "http://localhost:8000/Ops/"
const CompShowPost = ()=>{
    const [posts, setPost] = useState([])
    useEffect(()=>{
        getPost() 
    },[])

    //mostrar los post
    const getPost = async ()=>{
        const res = await axios.get(URL)
        setPost(res.data)
    }
    //eliminar post
    const deletePost = async (id)=>{
        await axios.delete(`${URL}${id}`)
        getPost()
    }

    return(<div className={style.container}>
        <div className="row">
            <div className={style.col}>
                <Link to={`/create`}className={style.botonCrear}>Postear</Link>
                <table className={style.tablaOpiniones}>
                    <thead>
                        <tr>
                            <th>nombre</th>
                            <th>post</th>
                            <th>opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post)=>(
                            <tr key={post.id}>
                                <td>{post.name}</td>
                                <td>{post.opinion}</td>
                                <td> 
                                    <Link to={`/edit/${post.id}`} className={style.botonEditar}>🖊️</Link> 
                                                                                                                                 
                                    <button onClick={()=> deletePost(post.id)}>🔥</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    </div>)
}
export default CompShowPost