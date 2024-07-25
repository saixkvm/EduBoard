const mongoose = require("mongoose");
const Class = require('../models/class');
const Task = require('../models/task');

// GETS all classes
const getClasses = async(req, res) => {
    const classes = await Class.find({});
    res.status(200).json(classes);
}

const getClass = async(req, res) => {
    const id = req.params.id;
    const classes = await Class.findById(id);
    res.status(200).json(classes);
}

const createClass = async(req, res) => {
    const {className, tasks} = req.body;
    try{
        const classC = await Class.create({className, tasks});
        res.status(200).json(classC);
    }
    catch (error){
        res.status(400).json({error: error})
    }
}
const deleteClass = async(req, res) => {
    const id = req.params.id;

    const classes = await Class.findByIdAndDelete({_id:id})
    res.status(200).json(classes);
}

const getTasks = async(req, res) => {
    const id = req.params.id;
    try
    {
        const classes = await Class.findById(id).populate('tasks');
        res.status(200).json(classes.tasks);
    }
    catch(error){
        res.status(400).json({error:error})

    }
}
const createTask = async (req, res) => {
    const { taskName, dueDate } = req.body;
    const classId = req.params.id;

    try {
        // Create the new task
        const task = await Task.create({ taskName, dueDate });

        // Update the class to add the new task ID to the tasks array
        await Class.findByIdAndUpdate(
            classId,
            { $push: { tasks: task._id } },
            { new: true } // this option returns the modified document
        );

        // Respond with the newly created task
        res.status(200).json(task);
    } catch (error) {
        // Handle any errors that occur
        res.status(400).json({ error: "ERROR" });
    }
};
const deleteTask = async(req, res) => {
    const id = req.params.taskId; // we get the task_id from the route /:classId/tasks/:taskId
    const classid = req.params.classId;

    const task = await Task.findByIdAndDelete(id);

    await Class.findByIdAndUpdate(
        classid,
        { $pull: { tasks: task._id } },
        { new: true } // this option returns the modified document
    );
    res.status(200).json(task);

}

module.exports = {getClasses, createClass, getClass, deleteClass, createTask, getTasks, deleteTask};