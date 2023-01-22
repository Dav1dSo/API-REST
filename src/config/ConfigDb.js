const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    dialect: 'mysql',
    host: process.env.HOST,
    port: process.env.DBPORT,
    username: 'root',
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
        timezone: '-03:00'
    },
    timezone: '-03:00'
};
