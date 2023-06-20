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

/**
 * POST TASKS
 */

router.post('/task', [
    //validation
    body('title').notEmpty()
], (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({
            errors : errors.array()
        });
    }

    //define formData
    let formData = {
        title : req.body.title,
        description : req.body.description,
        completed : 0
    }

    //insert query
    connection.query('INSERT INTO tasks SET ?', formData, function(err,rows){
        if(err){
            return res.status(500).json({
                status : false,
                message : 'Internal Server Error'
            })
        } else{
            return res.status(201).json({
                status : true,
                message : 'Insert Data Successfully',
                data : rows[0]
            })
        }
    })
})

module.exports = router;