const express = require("express");
const app = express();
const sequelize = require("./config/database");
const Cliente = require("./Models/Cliente");
const Actividad = require("./Models/Actividad");

sequelize.sync();

app.use(express.json());

const clientes = [];

//Gets cliente
app.get("/", (req, res) => {
  res.send("Ruta principal :D/");
});

app.get("/api/clientes", (req, res) => {
  res.send("Los clientes en el sistema son:");
});

app.get("/api/clientes/:id ", (req, res) => {
  const cliente = clientes.find((c) => c.id);

  if (!cliente)
    return res.status(404).send("No se encontro el cliente con ese ID :< ");
  else res.send(cliente);

  //pots cliente
  app.post("/api/clientes", (req, res) => {
    const cliente = {
      id: clientes.length + 1,
      name: req.body.name,
      age: parseInt(req.body.age),
    };
  });
  clientes.push(cliente);
  res.send(cliente);
});

//delete
app.get("/api/clientes/:id", (req, res) => {
  const cliente = clientes.find((c) => c.id === parseInt(req.params.id));
  if (!cliente) return res.status(404).send("Cliente no encontrado");
  const index = clientes.indexOf(cliente);
  clientes.splice(index, 1);
  res.send("cliente eliminado correctamente", cliente);
});

const port = process.env.port || 80;
app.listen(port, () => console.log(`Puerto Activo`));
