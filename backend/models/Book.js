const  Sequelize = require("sequelize");
const db = require("../config/db");

const Books = db.define("books", {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    editorial: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    author: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    isbn: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    img: {
        type: Sequelize.STRING(256),
        allowNull: false,
    } 
})

module.exports = Books;