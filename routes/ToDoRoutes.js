const {Router} = require("express");
const { getToDos, saveToDos, updateToDos, deleteToDos } = require("../controller/ToDoController");

const router = Router();

router.get("/get", getToDos); //Imported from ToDoController.js
router.post("/save", saveToDos); //Imported from ToDoController.js
router.put("/update/:id", updateToDos); //Imported from ToDoController.js
router.delete("/delete/:id", deleteToDos); //Imported from ToDoController.js

module.exports = router;