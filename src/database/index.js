import Sequelize from 'sequelize';
import databaseConfig from '../config/ConfigDb'
import Aluno from '../model/Aluno';

const models = [ Aluno ];

const connection = new Sequelize(databaseConfig); 

models.forEach((model) => model.init(connection));