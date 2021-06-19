const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const dbSocketAddr = process.env.DB_HOST.split(':');

const sequelizeConection =  new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: dbSocketAddr[0],
    dialect: "postgres",
    port: dbSocketAddr[1],
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

module.exports = sequelizeConection;