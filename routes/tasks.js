const express = require('express');
const {body, validationResult} = require('express-validator');
const router = express.Router();

//import database
const connection = require('../config/database');

/**
 * INDEX TASKS
 */
router.get('/tasks', function(req,res){
    //query
    connection.query('SELECT * FROM tasks ORDER BY id desc', function(err, rows){
        if(err){
            return res.status(500).json({
                status : false,
                message : 'Internal Server Error'
            })
        } else {
            return res.status(200).json({
                status : true,
                message : 'List Data Tasks',
                data : rows
            })
        }
    });
});

module.exports = router;