'use strict';

import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import {Sequelize} from 'sequelize';
const basename = _basename(__filename);
const env = process.env.NODE_ENV || 'development';
// tslint:disable-next-line: no-var-requires
const config = require(__dirname + '/../../db/config.json')[env];
const db:any = {};

let sequelize: any;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize.import(join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
