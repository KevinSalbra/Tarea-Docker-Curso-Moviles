const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

router.get("/", (req, res) => {
  res.send("Pagina de inicio");
});

// Importar todas las funciones de los controladores
const ClienteController = require("../controller/clienteController");
const ActividadController = require("../controller/actividadController");

//Rutas
router.get("/clientes", asyncHandler(ClienteController.VerTodosClientes));

router.post("/clientes", asyncHandler(ClienteController.AgregarCliente));

router.get("/actividades/:id", asyncHandler(ActividadController.VerActividad));

router.post("/actividades", asyncHandler(ActividadController.CrearActividad));

module.exports = router;
