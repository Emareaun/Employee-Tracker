const Sequelize = require('sequelize');
const mysql = require('mysql2');
require('dotenv').config();


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql'
  },
  console.log(`Connected to the employees_db database.`)
);


module.exports = sequelize;