const asyncHandler = require("express-async-handler");
const Actividad = require("../Models/Actividad"); 
const Cliente = require("../Models/Cliente"); 
const { validationResult } = require("express-validator");


exports.VerActividad = asyncHandler(async (req, res, next) => {
  const actividad = await Actividad.findByPk(req.params.id, {
    include: {
      model: Cliente,
      attributes: ['nombre', 'correoElectronico', 'telefono']
    }
  });
  
  if (!actividad) {
    return res.send("No se encontró la actividad");
  }
  res.json(actividad);
});

exports.CrearActividad = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { nombre, clienteID, fecha } = req.body;

  const verificarCliente = await Cliente.findByPk(clienteID);
  if (!verificarCliente) {
    return res
      .status(404)
      .json({ error: "El cliente no existe en la base de datos" });
  }

  const nuevaActividad = await Actividad.create({
    nombre,
    clienteID,
    fecha,
  });
  res.status(201).json(nuevaActividad);
});
