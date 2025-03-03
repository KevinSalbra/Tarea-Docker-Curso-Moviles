const { Sequelize } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
  process.env.NAME,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
    logging: false,
  }
);

async function conectarDB() {
  try {
    await sequelize.authenticate();
    console.log(" Conexión a la base de datos establecida con éxito.");
  } catch (error) {
    console.error(" Error al conectar la base de datos:", error);
  }
}

conectarDB();

module.exports = sequelize;
