const Sequelize = require('sequelize');
const { sequelize } = require('../database/database');


const Adition = sequelize.define('adition', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    numberOne: {
        type: Sequelize.INTEGER
    },
    numberTwo: {
        type: Sequelize.INTEGER
    },
    result: {
        type: Sequelize.INTEGER
    }
}, {
        timestamps: false
    });

module.exports = Adition;
