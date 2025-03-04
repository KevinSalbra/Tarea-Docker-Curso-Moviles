const asyncHandler = require("express-async-handler");
const Actividad = require("../Models/Actividad"); 
const Cliente = require("../Models/Cliente"); 

const generarIDActividad = async () => {
  let nuevoID;
  let existe = true;

  while (existe) {
    nuevoID = Math.floor(100000 + Math.random() * 90000000);
    existe = await Actividad.findByPk(nuevoID);
  }

  return nuevoID;
};

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
  const { nombre, clienteID, fecha } = req.body;

  if (!nombre || !clienteID || !fecha) {
    return res
      .status(400)

      .json({ error: "Todos los campos deben ser rellenados" });

  }

  const verificarCliente = await Cliente.findByPk(clienteID);
  if (!verificarCliente) {
    return res
      .status(404)
      .json({ error: "El cliente no existe en la base de datos" });
  }

  const actividadID = await generarIDActividad();

  const nuevaActividad = await Actividad.create({
    actividadID,
    nombre,
    clienteID,
    fecha,
  });

  res.status(201).json(nuevaActividad);
});
