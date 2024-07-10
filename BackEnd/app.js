import express from "express";
import cors from "cors";
//importar base de datos
import db from "./dataBase/db.js";

import router from "./routes/routes.js"

db.sync({ force: false }) 
  .then(() => {
    console.log('Tablas sincronizadas correctamente.');

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/Ops",router)
    
    try {
        db.authenticate()
        console.log("conexion correcta")
    } catch (error) {
        console.log(`error en ${error}`)
    }
    
    app.get('/',(req,res)=>{
        res.send("hello World A ver que")
    })
    
    app.listen(8000, ()=>{
        console.log("server UP runing in http://localhost:8000/")
    })
})

