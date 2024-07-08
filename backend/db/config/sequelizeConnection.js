const Sequelize = require('sequelize');
const config = require('./config');

console.log('Init Sequelize connection to', __dirname, config.database);

const sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = {
  sequelize,
};
