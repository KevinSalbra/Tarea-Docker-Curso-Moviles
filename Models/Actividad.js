const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Cliente = require("./Cliente");

const Actividad = sequelize.define(
  "Actividad",
  {
    actividadID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    clienteID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);



module.exports = Actividad;
