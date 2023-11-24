const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
    toDo: {
        type: String,
        required: true,
    },
    isChecked: {
        type: Boolean,
        required: true,
        default: false,
    },
});

module.exports = mongoose.model("ToDo", toDoSchema);