import * as sequelize from "sequelize";
import fs from 'fs';
import path from 'path';
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// tslint:disable-next-line: no-var-requires
const config = require(`${__dirname}/../../db/config.json`)[env];
const db:any = {};
const ignoreFiles = [basename];


let dbConfig: any;
if (config.use_env_variable) {
  dbConfig = new sequelize.Sequelize(process.env[config.use_env_variable], config);
} else {
  dbConfig = new sequelize.Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  .filter(
    (file:any) =>{
    return file.indexOf('.') !== 0 && ignoreFiles.indexOf(file) < 0 && file.slice(-3) === '.ts'
    }
  )
  .forEach((file:any) => {
    console.log('file path :', path.join(__dirname, file));
    // const model = require(path.join(__dirname, file))(dbConfig, sequelize.DataTypes);
    const modelValue = require(path.join(__dirname, file));
    console.log('modelValue is', modelValue);
    const model = modelValue.default(dbConfig);

    console.log('model :', model)
    db[model.name] = model;
  });

db.sequelize = dbConfig;
db.Sequelize = sequelize.Sequelize;
console.log('db is', db);

export default db;
// module.exports = db;


// import fs from 'fs';
// import path from 'path';
// import {Sequelize} from 'sequelize';

// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// // eslint-disable-next-line import/no-dynamic-require
// const config = require(`${__dirname}/../../db/config.json`)[env];
// const db:any = {};
// const ignoreFiles = [basename, 'validators.js'];

// console.log('index js called')

// let sequelize:any;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// }
// else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs.readdirSync(__dirname)
//   .filter(
//     (file:any) =>{
//       console.log('file is', file)
//     return file.indexOf('.') !== 0 && ignoreFiles.indexOf(file) < 0 && file.slice(-3) === '.js'
//     }
//   )
//   .forEach((file:any) => {
//     console.log('file path :', path.join(__dirname, file));
//     const model = sequelize.import(path.join(__dirname, file));
//     console.log('model :', model)
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;
