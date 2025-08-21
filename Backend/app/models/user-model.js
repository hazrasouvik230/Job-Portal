const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: "User"
    },
    appliedJobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    }],
    savedJobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    }],
    jobPostCount: {
        type: Number,
        default: 0
    },
    isSubscribed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;