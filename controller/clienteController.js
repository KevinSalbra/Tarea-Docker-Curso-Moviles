const Cliente = require("../Models/Cliente");
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");

exports.VerTodosClientes = asyncHandler(async (req, res, next) => {
  const clientes = await Cliente.findAll();
  if (!clientes) {
    return res.status(404).send("Actualmente no se cuenta con clientes");
  }

  return res.status(200).json(clientes);
});

exports.AgregarCliente = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id, nombre, correoElectronico, telefono } = req.body;

  const verificarID = await Cliente.findByPk(id);
  if (verificarID) {
    return res
      .status(404)
      .json({ error: "El cliente ya existe en la base de datos" });
  }

  const nuevoCliente = await Cliente.create({
    id,
    nombre,
    correoElectronico,
    telefono,
  });
  res.status(201).json(nuevoCliente);
});
