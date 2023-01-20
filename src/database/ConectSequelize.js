import { Sequelize } from "sequelize"
import * as dotenv from 'dotenv';
dotenv.config();

// --Configuração de conexão-- 
const ConectSequelize = new Sequelize (`${process.env.DATABASE}, ${process.emnv.USERNAME}, ${process.env.PASSWORD}`, {
    host: process.env.HOST,
    dialect: 'mysql'
});

// --Testando conexão--
try {
    await ConectSequelize.authenticate();
    console.log('Conexão realizada com sucesso!')
} catch(e) {
    console.log(e)
};

export default ConectSequelize;
