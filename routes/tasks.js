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


/**
 * GET SPECIFIED TASK BY ID
 */
router.get('/tasks/(:id)', function(req,res){
    let id = req.params.id;

    connection.query(`SELECT * FROM tasks WHERE id = ${id}`, function(err,rows){
        if(err){
            return res.status(500).json({
                status : false,
                message : 'Internal Server Error'
            })
        }

        //if tasks not found
        if(rows.length <= 0){
            return res.status(404).json({
                status : false,
                message : 'Data Task Not Found!'
            })
        }

        //if tasks found
        return res.status(200).json({
            status : true,
            message : 'Detail Data Task',
            data : rows[0]
        })
    })
})

/**
 * UPDATE TASK
 */
router.patch('/tasks/(:id)', [
    //validation
    body('title').notEmpty(),
    body('description').notEmpty(),
    body('completed').notEmpty()
], (req,res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            errors : errors.array()
        });
    }

    //id task
    let id = req.params.id;

    //data task
    let formData = {
        title : req.body.title,
        description : req.body.description,
        completed : req.body.completed
    }

    //update query
    connection.query(`UPDATE tasks SET ? WHERE id=${id}`, formData, function(err,rows){
        if(err){
            return res.status(500).json({
                status : false,
                message : 'Internal Server Error'
            })
        } else {
            return res.status(200).json({
                status : true,
                message : 'Update Data Successfully!'
            })
        }
    })
})

module.exports = router;