//importar la conexion con la base de datos
import db from "../dataBase/db.js";
import {DataTypes} from "sequelize";

const BlogModel = db.define('foroBd',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      opinion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
      }
    }, {
      timestamps: true // Esto habilita los campos createdAt y updatedAt automáticamente
    
})

export default BlogModel