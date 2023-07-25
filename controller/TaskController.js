
const { mongoose } = require('mongoose');
const tasks = require('../models/TaskModel')

const createTask = async (req, res) => {
    if(!req.body.name){
        return res.send('must have some value')
    }
    const task = new tasks(req.body)
    await task.save();
    res.send('user saved ')

}
const getAllTasks = async (req, res) => {
    const allData = await tasks.find({})
    res.status(201).json({ allData })
}
const updateTask = async (req, res) => {
    const { id } = req.params
    if(!req.body.name){
        return res.send('must have some value')
    }
    const update = await tasks.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true,
    })
    if (!update) {
        res.send('no task witb id provided')
    }
    res.status(200).json(update)

}
const deleteTask = async (req, res) => {
    const { id } = req.params
    const task = await tasks.findOneAndDelete({ _id: id })
    if(!task){
        res.json({"msg":'no task with id provided'})
    }
    res.json({"msg":'task deleted sucessfully'})
}
const getTask = async (req, res) => {
    const { id } = req.params
    const task = await tasks.findOne({ _id: id })
    if(!task){
        res.json({"msg":'no task with id provided'})
    }
    res.json(task)
}

module.exports = {
    createTask, getAllTasks, updateTask, deleteTask, getTask

}