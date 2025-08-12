const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user-model");
const Job = require("../models/job-model");
const Resume = require("../models/resume-model");

const { userRegisterValidationSchema, userLoginValidationSchema } = require("../validations/user-validation");
const resumeValidationSchema = require("../validations/resume-validation");

const generateResumeSummary = require("../utils/resume-summary");

const userController = {};

userController.register = async (req, res) => {
    const { error, value } = userRegisterValidationSchema.validate(req.body, { abortEarly: false });
    if(error) {
        return res.status(400).json({ error: error.details.map(err => err.message)});
    }
    
    try {
        // Checks user existance
        const isUserExist = await User.findOne({ email: value.email });
        if(isUserExist) {
            return res.status(400).json({ error: "User already exist." });
        }

        // Create hashed password
        const salt = await bcryptjs.genSalt();
        const hashedPassword = await bcryptjs.hash(value.password, salt);
        value.password = hashedPassword;
        
        const user = new User(value);
        await user.save();

        res.status(201).json({ success: true, message: "Registration done successfully!", user: user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Something went wrong." });
    }
};

userController.login = async (req, res) => {
    const { error, value } = userLoginValidationSchema.validate(req.body, { abortEarly: false });
    if(error) {
        return res.status(400).json({ error: error.details.map(err => err.message )});
    }

    try {
        // Checks user existance
        const isUserExist = await User.findOne({ email: value.email });
        if(!isUserExist) {
            return res.status(404).json({ error: "Invalid email or password." });
        }
        
        // Comparing password
        const isCorrectPassword = await bcryptjs.compare(value.password, isUserExist.password);
        if(!isCorrectPassword) {
            return res.status(404).json({ error: "Invalid email or password." });
        }

        // Create token
        const tokenData = { userId: isUserExist.id, role: isUserExist.role };
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ success: true, message: "Login done successfully!", user: isUserExist, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Something went wrong." });
    }
};

userController.list = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, users });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Something went wrong." });
    }
};

userController.profile = async (req, res) => {
    try {
        const profile = await User.find({ _id: req.userId });
        res.status(200).json({ success: true, profile });
    } catch (error) {
        console.log(error);
    }
};

userController.updateProfile = async (req, res) => {
    const { error, value } = userRegisterValidationSchema.validate(req.body, { abortEarly: false });
    if(error) {
        return res.status(400).json({ error: error.details.map(err => err.message)});
    }

    try {
        // Checks user existance
        const isUserExist = await User.findById(req.userId);
        if(!isUserExist) {
            return res.status(404).json({ error: "User not found." });
        }

        isUserExist.name = value.name || isUserExist.name;
        isUserExist.email = value.email || isUserExist.email;
        isUserExist.role = value.role || isUserExist.role;
        if(value.password) {
            const salt = await bcryptjs.genSalt();
            isUserExist.password = await bcryptjs.hash(value.password, salt);
        }

        await isUserExist.save();

        res.status(200).json({ success: true, message: "Profile updated successfully!", isUserExist });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Something went wrong." });
    }
};

userController.myApplication = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.userId });
        const appliedJobs = user.appliedJobs;
        res.status(200).json({ success: true, appliedJobs })
    } catch (error) {
        console.log(error);
    }
};

userController.delete = async (req, res) => {
    const userID = req.params.id;

    try {
        if(req.role !== "Admin") {
            return res.status(403).json({ error: "Forbidden: Only admin can delete users." });
        }

        const user = await User.findByIdAndDelete(userID);
        if(!user) {
            res.status(404).json({ error: "User not found." });
        }

        const postedJobs = await Job.find({ postedBy: userID });

        await Job.deleteMany({ postedBy: userID });

        // Update users who applied or saved those jobs
        const jobIDs = postedJobs.map(job => job._id);

        // Remove job from appliedJobs
        await User.updateMany({ appliedJobs: { $in: jobIDs } }, { $pull: { appliedJobs: { $in: jobIDs } } });

        // Remove job from savedJobs
        await User.updateMany({ savedJobs: { $in: jobIDs } }, { $pull: { savedJobs: { $in: jobIDs } } });

        res.status(200).json({ success: true, message: "User deleted." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred while deleting the user." });
    }
};

userController.resume = async (req, res) => {
    const { error, value } = resumeValidationSchema.validate(req.body, { abortEarly: false });
    if(error) {
        return res.status(400).json({ error: error.details.map(e => e.message) });
    }

    try {
        const user = await User.findById(req.userId);
        if(!user) {
            return res.status(404).json({ error: "User not found. "});
        }

        //  Check if user already has a resume
        const existingResume = await Resume.findOne({ user: req.userId });
        if(existingResume) {
            await Resume.updateOne({ user: req.userId }, { $set: value });
            return res.status(200).json({ success: true, message: "Resume updated successfully." });
        }

        value.name = user.name;
        value.email = user.email;
        value.summary = await generateResumeSummary(value);

        // Create new resume
        const resume = new Resume({ ...value, user: req.userId });
        await resume.save();

        res.status(201).json({ success: true, message:"Resume created successfully.", resume })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred while creating the user's resume." });
    }
}

module.exports = userController;