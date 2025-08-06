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
    }]
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;