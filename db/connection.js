require('dotenv').config();
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "workplace_db"
},
console.log("connected to database"))

module.exports = connection;