const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: String,
    email: String,
    address: String,
    mobile: String,
    socialMedias: {
        type: [String],
        default: []
    },
    summary: String,
    educations: {
        type: [String],
        default: []
    },
    skills: {
        type: [String],
        default: []
    },
    projects: {
        type: [String],
        default: []
    },
    experiences: {
        type: [String],
        default: []
    },
    languages: {
        type: [String],
        default: []
    },
    interests: {
        type: [String],
        default: []
    }
}, { timestamps: true });

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;