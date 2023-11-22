const ToDoModel = require("../models/ToDoModel");

//This function will send all the ToDos which are present

module.exports.getToDos = async (req, res) => {
    const toDos = await ToDoModel.find()
    res.send(toDos)
}

module.exports.saveToDos = (req, res) => {
    const { toDo } = req.body

    ToDoModel.create({ toDo })
        .then(data => {
            console.log("Saved Sucessfully!...");
            res.status(201).send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send({ error: err, msg: "Something went wrong!" });
        });
}

module.exports.updateToDos = (req, res) => {
    const { id } = req.params;
    const { toDo } = req.body

    ToDoModel.findByIdAndUpdate(id, { toDo })
        .then(() => {
            res.send("Updated Sucessfully...")
        })
        .catch((err) => {
            console.log(err)
            res.send({ error: err, msg: "Something went wrong!" });
        });

}

module.exports.deleteToDos = (req, res) => {
    const { id } = req.params;

    ToDoModel.findByIdAndDelete(id)
        .then(() => {
            res.send("Deleted Sucessfully...")
        })
        .catch((err) => {
            console.log(err)
            res.send({ error: err, msg: "Something went wrong!" });
        });

};