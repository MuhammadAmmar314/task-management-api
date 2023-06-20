const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//import route tasks
const tasksRouter = require('./routes/tasks');

//Middleware
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/', tasksRouter);

app.listen(port, () => {
    console.log(`Task Manager API listening at http://localhost:${port}`);
})