const Sequelize = require('sequelize');
const config = {
  url: process.env.DATABASE_URL,
  database: 'backenddb',
  host: 'localhost',
  username: 'dev',
  password: 'localdev',
  port: 5432,
  dialect: 'postgres',
  operatorsAliases: Sequelize.Op,
  logging: false,
  pool: {
    max:  50,
    min: 10,
    acquire: 60000,
    idle: 10000
  },
  
};

module.exports = config;