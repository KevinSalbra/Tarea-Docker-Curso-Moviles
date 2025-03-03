const Cliente = require("../Models/Cliente");
const asyncHandler = require("express-async-handler");



    exports.VerTodosClientes = asyncHandler(async(req,res,next)=>{

        const clientes = await Cliente.findAll();
        if (!clientes) {
            return res.status().send("Actualmente no se cuenta con clientes");
        }
        else
        {
            return res.send("Los clientes actuales son:").json(clientes)
        }
    });


    exports.AgregarCliente = asyncHandler(async(req,res,next)=>{

        const { id, name,age } = req.body;

        // Validación para evitar campos vacíos
        if (!id || !name || !age) {
          return res.status(400).json({ error: "Todos lo campos deben de ser rellenados" });
        }
      
        // Inserta si los campos están completos
        const nuevoCliente = await Cliente.create({ id, name, age });
        res.status(201).json(nuevoCliente);
 
    });




