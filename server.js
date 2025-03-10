const sequelize = require("./config/database");

async function syncDB() {
  try {
    await sequelize.sync({ alter: true });
    console.log(" Base de datos sincronizada correctamente.");
    process.exit();
  } catch (error) {
    console.error(" Error al sincronizar la base de datos:", error);
    process.exit(1);
  }
}

syncDB();
