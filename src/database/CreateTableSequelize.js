import { DataTypes, Sequelize } from "sequelize";
import ConectSequelize from "./conectSequelize";

const Alunos = ConectSequelize.define('Alunos', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    

});