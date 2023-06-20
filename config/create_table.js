const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "task_manager_api"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL");
});

let sql = "CREATE TABLE tasks (id INT, title VARCHAR(255), description VARCHAR(255), status BIT(1))";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});

con.end();