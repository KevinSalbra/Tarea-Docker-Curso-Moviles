const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

// Ruta Home
app.get("/", (req, res) => {
  res.send("Página principal de la API");
});

// Iniciar el servidor
app.listen(3000, () => {});

// Importar todas las funciones del clienteController
const ClienteController = require("./clienteController");

// Ruta para ver todos los clientes
router.get("/clientes", asyncHandler(ClienteController.VerTodosClientes));

// Ruta para agregar un nuevo cliente
router.post("/clientes", asyncHandler(ClienteController.AgregarCliente));

module.exports = router;
