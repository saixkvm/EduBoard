const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema(
    {
        taskName: {
            type: String,
            required: true
        },
        dueDate: {
            type: String,
            required: true
        }
    }
)
module.exports = mongoose.model("Task", taskSchema);