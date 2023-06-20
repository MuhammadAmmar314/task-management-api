const mysql = require('mysql');

const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : ''
});

con.connect(function(err){
    if(err) throw err;
    console.log('Connected to MySQL');
});

con.query("CREATE DATABASE task_manager_api", function (err, result){
    if (err) throw err;
    console.log("Database created");
});
con.end();