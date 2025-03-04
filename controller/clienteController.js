const Cliente = require("../Models/Cliente");
const asyncHandler = require("express-async-handler");

    exports.VerTodosClientes = asyncHandler(async(req,res,next)=>{

        const clientes = await Cliente.findAll();
        if (!clientes) {
            return res.status(404).send("Actualmente no se cuenta con clientes");
        }
       
            return res.status(200).json(clientes)
        
    });


    exports.AgregarCliente = asyncHandler(async(req,res,next)=>{

        const { nombre,edad } = req.body;

        // Validación para evitar campos vacíos
        if ( !nombre || !edad) {
            console.log(nombre,edad)
          return res.status(400).json({ error: "Todos lo campos deben de ser rellenados" });
        }
      
        // Inserta si los campos están completos
        const nuevoCliente = await Cliente.create({nombre,edad});
        res.status(201).json(nuevoCliente);
 
    });




