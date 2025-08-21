const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    jobType: String,
    description: String,
    requirements: {
        type: [String],
        default: []
    },
    salary: String,
    experienceLevel: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    deadline: Date,
    interviewQuestions: String,
    applicants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
}, { timestamps: true });

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;