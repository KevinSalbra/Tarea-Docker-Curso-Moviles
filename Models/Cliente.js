const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Actividad = require("./Actividad"); 

const Cliente = sequelize.define(
  "Cliente",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correoElectronico: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

Cliente.hasMany(Actividad, { foreignKey: 'clienteID', sourceKey:"id" });
Actividad.belongsTo(Cliente, { foreignKey: 'clienteID',sourceKey:"id" });

module.exports = Cliente; 
