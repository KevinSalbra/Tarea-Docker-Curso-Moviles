const Actividad = require("../Models/Actividad");
const Cliente = require("../Models/Cliente");
const asyncHandler = require("express-async-handler");

exports.VerActividad = asyncHandler(async (req, res, next) => {
  const actividad = await Actividad.findByPk(req.params.id);

  if (!actividad) {
    return res.send("No se encontro la actividad");
  }
  res.json(actividad);
});

exports.CrearActividad = asyncHandler(async (req, res, next) => {
  const { nombre, clienteID, fecha } = req.body;

  if (!nombre || !clienteID || !fecha) {
    return res
      .status(400)
      .json({ error: "Todos lo campos deben de ser rellenados" });
  }

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
