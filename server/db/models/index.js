const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize')

let rawData = fs.readFileSync(path.resolve(__dirname, '../config/config.json'))
let dbConfig = JSON.parse(rawData)

let dbTest = dbConfig.test
let dbDev = dbConfig.production

//create database named "indonesia_future" first
const sequelize = new Sequelize (dbTest.database, dbTest.username, dbTest.password, {
    host : dbTest.host,
    dialect : dbTest.dialect,
    operatorsAliases : false, 

});

// const sequelize = new Sequelize (dbDev.database, dbDev.username, dbDev.password, {
//     host : dbDev.host,
//     dialect : dbDev.dialect,
//     port : 7496,
//     operatorsAliases : false,
// });


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.client = require('./client.model.js')(sequelize, Sequelize); 

module.exports = db;


