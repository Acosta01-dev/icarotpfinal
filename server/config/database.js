const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('icarotpf', 'root', '', {
    host: 'localhost', 
    dialect: 'mysql', 
});

module.exports = sequelize;
