const express = require('express')
const { createTask, getAllTasks, updateTask, deleteTask, getTask } = require('../controller/TaskController')
const router = express.Router()

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router