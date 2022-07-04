/* mysql setting */
const mysql = require("mysql");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({
  path: path.resolve(__dirname, ".env." + process.env.NODE_ENV),
});

const connection = mysql.createConnection({
  host: process.env.host,
  port: process.env.port,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});
console.log(
  "### __dirname : " + path.resolve(__dirname, ".env." + process.env.NODE_ENV)
);
console.log("### host : " + process.env.host);
module.exports = connection;
