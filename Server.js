const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/ToDoRoutes");

const cors = require("cors"); //cors is mechanism to support cross-origin requests 

const app = express();
const PORT = process.env.PORT || 5000; //If there is a port defined in the env file then use or by default its 5000

// Middleware
app.use(cors())
app.use(express.json()) //We can parse JSON Now

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected..."))
    .catch ((err) => console.log(err));

    app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at  ${PORT}...`))