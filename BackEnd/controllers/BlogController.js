import BlogModel from "../models/BlogModel.js";

//* Metodos para el foro  */

//mostrar todas las opiniones
export const getAllOps = async (req, res) => { 
    try {
        const Ops = await BlogModel.findAll()
        res.json(Ops)
    } catch (error) {
        res.json({message: error.message +" identificador 01"})
    }
}
//mostrar una opinion 
export const getOp = async (req, res) => {
    try {
        const Op = await BlogModel.findAll({
            where:{id:req.params.id}
        })
        res.json(Op[0])
    } catch (error) {
        res.json({message: error.message})
    }
}
//crear una opinion
export const CreateOp = async (req,res)=>{
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "opinion enviada correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
//editar una opinion 
export const UpdateOp = async (req, res)=>{
    try {
        await BlogModel.update(req.body,{
            where:{id: req.params.id}
        })
        res.json({
            "message": "opinion actualizada correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
//Eliminar una opinion 
export const DeleteOp = async (req,res)=>{
    try {
        await BlogModel.destroy({
            where:{id: req.params.id}
        })
        res.json({
            "message": "opinion actualizada correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}