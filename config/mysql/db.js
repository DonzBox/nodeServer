/* mysql setting */
const mysql = require('mysql');
const connection = mysql.createConnection({
  host : '127.0.0.1',
  port : '3306',
  user : 'donz',
  password : 'Dj9!32435',
  database : 'mediation_server'
});

module.exports = connection;