const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({}, { timestamps: true });

const Interview = mongoose.model("Interview", interviewSchema);

module.exports = Interview;