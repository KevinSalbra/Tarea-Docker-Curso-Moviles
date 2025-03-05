const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { body } = require("express-validator");
const ClienteController = require("../controller/clienteController");
const ActividadController = require("../controller/actividadController");

router.get("/", (req, res) => {
  res.send("Pagina de inicio");
});

//Rutas
router.get("/clientes", asyncHandler(ClienteController.VerTodosClientes));

router.post(
  "/clientes",
  [
    body("id").notEmpty().withMessage("ID es requerido"),
    body("nombre").notEmpty().withMessage("Nombre es requerido"),
    body("correoElectronico")
      .isEmail()
      .withMessage("Correo electronico no es valido"),
    body("telefono").isNumeric().withMessage("Telefono debe ser numerico"),
  ],
  asyncHandler(ClienteController.AgregarCliente)
);

router.get("/actividades/:id", asyncHandler(ActividadController.VerActividad));

router.post(
  "/actividades",
  [
    body("nombre").notEmpty().withMessage("Nombre es requerido"),
    body("clienteID").notEmpty().withMessage("ClienteID es requerido"),
    body("fecha")
      .matches(/^\d{4}\/\d{2}\/\d{2}$/)
      .withMessage("Fecha debe ser en el formato YYYY/MM/DD"),
  ],
  asyncHandler(ActividadController.CrearActividad)
);

module.exports = router;
