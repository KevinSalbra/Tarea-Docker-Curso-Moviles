const Actividad = require("../Models/Actividad");
const Cliente = require("../Models/Cliente")
const asyncHandler = require("express-async-handler");

exports.VerActividad = asyncHandler(async (req,res,next)=> {
const actividad = await Actividad.findByPk(req.params.ActividadID);

if(!actividad){
    return res.send("No se encontro la activadad");
}
res.json(actividad);

});

exports.CrearActividad = asyncHandler(async(req,res,next)=> {

    const { ActividadID,Nombre,ClienteID } = req.body;

 
    if (!ActividadID  || !Nombre || !ClienteID) {
      return res.status(400).json({ error: "Todos lo campos deben de ser rellenados" });
    }
  

    const VerificarCliente = asyncHandler.findByPk(req.params.ClienteID);

    if(!VerificarCliente){
        return res.send("No se encontro el cliente ingresado");
    }else{
         const nuevaActividad = await Actividad.create({ ActividadID, Nombre,ClienteID });
    res.status(201).json(nuevaActividad); 
    }

});