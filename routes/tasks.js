const express = require('express');
const router = express.Router();

const mongo = require('../mongo');
const util = require('../util');

// Get all tasks
router.get('/', (req, res) => {
    mongo.find('dbTasks', {}, (err, tasks) => {
        if (err) {
            res.send(err);
        }
        res.json(tasks);
    });
});

// Get single task
router.get('/:id', (req, res) => {
    mongo.findOne('dbTasks', {_id: util.getObjectId(req.params.id)}, (err, tasks) => {
        if (err) {
            res.send(err);
        }
        res.json(tasks);
    });
});

// Save task
router.post('/', (req, res) => {
    const task = req.body;
    if (!task.title || !(task.isDone + '')) {
        res.status(400);
        res.json({
            error: "Bad Data"
        });
    } else {
        mongo.save('dbTasks', task, (err, task) => {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }
});

// Delete task
router.delete('/:id', (req, res) => {
    mongo.remove('dbTasks', {_id: util.getObjectId(req.params.id)}, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
});

// Update task
router.put('/:id', (req, res) => {
    const task = req.body;
    let updatedTask = {};

    if (task.isDone + '' !== '') {
        updatedTask.isDone = task.isDone;
    }

    if (task.title) {
        updatedTask.title = task.title;
    }

    if (Object.keys(updatedTask).length === 0) {
        res.status(400);
        res.json({
            error: "Bad Data"
        });
    } else {
        mongo.findAndModify('dbTasks', {_id: util.getObjectId(req.params.id)}, updatedTask, (err, task) => {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }
});

module.exports = router;
