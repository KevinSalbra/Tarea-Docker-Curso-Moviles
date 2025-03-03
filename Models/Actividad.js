const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Cliente = require("./Cliente");

const Actividad = sequelize.define(
  "Actividad",
  {
    ActividadID: {
      type: DataTypes.INTEGER,
      autoIncrement: false,
      primaryKey: true,
    },
    CodigoActividad: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
    },
    Nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ClienteID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cliente,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Actividad;
