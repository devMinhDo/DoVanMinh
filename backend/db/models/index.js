'use strict';

const fs = require('fs');
const path = require('path');


const basename = path.basename(__filename);
const { sequelize } = require('../config/sequelizeConnection');
const Sequelize = require('sequelize');

function getDB(sequelizeInst, models) {
  const db = models
    .reduce((res, model) => {
      res[model.name] = model;
      return res;
    }, {});

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  db.sequelize = sequelizeInst;
  return db;
}

const models = fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .map(file => require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes))

const db = getDB(sequelize, models);

module.exports = db;
