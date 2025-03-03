const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

// Ruta Home (cambia app.get por router.get)
router.get("/", (req, res) => {
  res.send("Pagina de inicio");
});

// Iniciar el servidor
app.listen(3000, () => {});

// Importar todas las funciones de los controladores
const ClienteController = require("./clienteController");
const ActividadController = require("./actividadController");

router.get("/clientes", asyncHandler(ClienteController.VerTodosClientes));

router.post("/clientes", asyncHandler(ClienteController.AgregarCliente));

router.get("/:id", asyncHandler(ActividadController.obtenerActividadPorId));

router.post("/actividades", asyncHandler(ActividadController.agregarActividad));

module.exports = router;
