const ToDoModel = require("../models/ToDoModel");

// Get all ToDos
module.exports.getToDos = async (req, res) => {
    try {
        const toDos = await ToDoModel.find();
        res.status(200).json(toDos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error", message: "Failed to retrieve ToDos" });
    }
};

// Save a new ToDo
module.exports.saveToDos = (req, res) => {
    const { toDo } = req.body;

    ToDoModel.create({ toDo })
        .then(data => {
            console.log("Saved Successfully!...");
            res.status(201).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error", message: "Failed to save ToDo" });
        });
};

// Update a ToDo by ID
module.exports.updateToDos = (req, res) => {
    const { id } = req.params;
    const { toDo, isChecked } = req.body;
    
    ToDoModel.findByIdAndUpdate(
        id,
        { toDo, isChecked },
        { new: true } // Return the updated document
    )
        .then(updatedTodo => {
            if (!updatedTodo) {
                return res.status(404).json({ error: "Not Found", message: "ToDo not found" });
            }
            res.status(200).json(updatedTodo);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error", message: "Failed to update ToDo" });
        });
};

// Delete a ToDo by ID
module.exports.deleteToDos = (req, res) => {
    const { id } = req.params;

    ToDoModel.findByIdAndDelete(id)
        .then(deletedTodo => {
            if (!deletedTodo) {
                return res.status(404).json({ error: "Not Found", message: "ToDo not found" });
            }
            res.status(200).send("Deleted Successfully...");
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error", message: "Failed to delete ToDo" });
        });
};
