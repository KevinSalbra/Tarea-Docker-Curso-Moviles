const express = require("express");
const app = express();
const sequelize = require("./config/database");
const Cliente = require("./Models/Cliente");
const Actividad = require("./Models/Actividad");

sequelize.sync();

app.use(express.json());

const port = process.env.port || 80;
app.listen(port, () => console.log(`Puerto Activo`));
