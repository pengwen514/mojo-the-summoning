// add your database connection here
const path = require('path')
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite"),
    logging: false
});

module.exports = {
    sequelize,
    DataTypes,
    Model
}