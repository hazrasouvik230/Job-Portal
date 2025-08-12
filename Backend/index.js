require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const configureDB = require("./app/database/db");
configureDB();

const userController = require("./app/controllers/user-controller");
const jobController = require("./app/controllers/job-controller");
const authenticateUser = require("./app/middlewares/authenticate-user");
const authorizeUser = require("./app/middlewares/authorize-user");

app.get("/", (req, res) => {
    res.send("Hello world!");
});

// User Routes
app.post("/api/register", userController.register); // Registration ✅
app.post("/api/login", userController.login);   // Login ✅
app.get("/api/users", authenticateUser, authorizeUser(["Admin", "Moderator"]), userController.list);    // List of all users ✅
app.delete("/api/users/:id", authenticateUser, authorizeUser(["Admin"]), userController.delete);    // Admin can delete a user ✅
app.get("/api/profile", authenticateUser, userController.profile);  // View own profile ✅
app.put("/api/Profile", authenticateUser, userController.updateProfile);  // Update own profile ✅
app.get("/api/myApplication", authenticateUser, userController.myApplication);  // View applied jobs

app.post("/api/resume", authenticateUser, authorizeUser(["User"]), userController.resume);  // Create a resume ✅

// Job Routes
app.post("/api/job", authenticateUser, authorizeUser(["Moderator"]), jobController.create); // Create a job ✅
app.put("/api/job/:id", authenticateUser, authorizeUser(["Moderator"]), jobController.update);  // Update a specific job
app.delete("/api/job/:id", authenticateUser, authorizeUser(["Admin", "Moderator"]), jobController.delete);  // Delete a specific job
app.get("/api/job", authenticateUser, authorizeUser(["User"]), jobController.getAllJobs);   // Users can see all jobs ✅
app.get("/api/job/:id", authenticateUser, authorizeUser(["User"]), jobController.getSpecificJob);   // Get a specific job ✅
app.post("/api/job/:id", authenticateUser, authorizeUser(["User"]), jobController.apply);   // Apply for a job ✅
app.get("/api/job/:id", authenticateUser, authorizeUser(["Moderator"]), jobController.list);    // Get details for a specific job
// app.get("/api/jobs?filter", authenticateUser, authorizeUser(["User"]), jobController.filter);   // Filtered job listing
app.post("/api/job/:id/save", authenticateUser, authorizeUser(["User"]), jobController.save);   // Save a job
app.get("/api/job/save", authenticateUser, authorizeUser(["User"]), jobController.savedJobs);   // Saved jobs are

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});