const {dotenv} = require('dotenv');
dotenv.config();

module.exports = {
    dialect: 'mysql',
    host: process.env.HOST,
    port: process.env.DBPORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
    dialectOptions: {
        timezone: 'America/Sao-Paulo',
    },
    timezone: 'America/Sao_Paulo',
};
