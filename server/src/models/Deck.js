const {sequelize, DataTypes, Model} = require('../db/config')

class Deck extends Model {}

Deck.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING
    },
    {
        xp: {
            DataTypes.INTEGER
        }
    },
    {
        sequelize: sequelize,
        modelName: "Deck"
    }
);

module.exports = {
    User
};