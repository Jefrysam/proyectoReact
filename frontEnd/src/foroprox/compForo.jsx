//proximamente sera el foro jejeje
//by Jefry Guerrero
import style from "./compForo.module.css"

//importar los componentes 
import CompShowPost from "./showPost"
import CompCreatePost from "./createPost"
import CompEditPost from "./editPost"

import React, {useState} from "react"

import {BrowserRouter, Routes, Route} from "react-router-dom"

const Post = ()=>{

    const [owner, setowner] = useState("Jeffry")
    const [parrafo, setparrafo] = useState("unknown identificador lorem bla bla bla para ver si se alarga esta vaina ome")

    return(<div className={style.cardForo}><h3 className={style.cardForoTitle}>{owner}</h3>
    <p className="CardForoParagraph">{parrafo}</p></div>)
}

function Content5(){

    return(<div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CompShowPost></CompShowPost>}></Route>
                <Route path="/create" element={<CompCreatePost></CompCreatePost>}></Route>
                <Route path="/edit/:id" element={<CompEditPost></CompEditPost>}></Route>
            </Routes>
        </BrowserRouter>  
        
    </div>)
}
export default Content5

