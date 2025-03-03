const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

// Ruta Home (cambia app.get por router.get)
router.get("/", (req, res) => {
  res.send("Pagina de inicio");
});

// Importar todas las funciones del clienteController
const ClienteController = require("../controller/clienteController");

// Ruta para ver todos los clientes
router.get("/clientes", asyncHandler(ClienteController.VerTodosClientes));

// Ruta para agregar un nuevo cliente
router.post("/clientes", asyncHandler(ClienteController.AgregarCliente));

module.exports = router;
