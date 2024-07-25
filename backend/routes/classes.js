const express = require("express");
const {getClasses, createClass, getClass, deleteClass, createTask, getTasks, deleteTask} = require("../controllers/classcontroller")
const router = express.Router();


// getting all the classes in the home page
router.get('/', getClasses);

// getting a single class with all the tasks 
router.get("/:id", getClass);

// create a new class
router.post("/", createClass);

// delete class
router.delete("/:id", deleteClass);

// gets all the tasks in a single class
router.get("/:id/tasks", getTasks)

// Add a new task to a class
router.post("/:id/tasks", createTask);
// // Delete a task from a class

router.delete("/:classId/tasks/:taskId", deleteTask);



module.exports = router;
