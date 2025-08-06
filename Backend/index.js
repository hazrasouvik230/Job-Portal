require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const configureDB = require("./app/database/db");
configureDB();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello world!");
});

const userController = require("./app/controllers/user-controller");
const authenticateUser = require("./app/middlewares/authenticate-user");
const authorizeUser = require("./app/middlewares/authorize-user");

app.post("/api/register", userController.register);
app.post("/api/login", userController.login);

app.get("/api/users", authenticateUser, authorizeUser(["Admin", "Moderator"]), userController.list);

const jobController = require("./app/controllers/job-controller");

app.post("/api/job", authenticateUser, authorizeUser(["Moderator"]), jobController.create);
app.post("/api/job/:id", authenticateUser, authorizeUser(["User"]), jobController.apply);
app.get("/api/job/:id", authenticateUser, authorizeUser(["Moderator"]), jobController.list);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});