const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const classSchema = new Schema(
    {
        className: {
            type: String,
            required: true
        },
        tasks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
          }]
    }
)

module.exports = mongoose.model("Class", classSchema);