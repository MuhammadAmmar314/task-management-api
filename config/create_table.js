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

let sql = "CREATE TABLE tasks (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255) NOT NULL, description VARCHAR(255), completed TINYINT(1))";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});

con.end();