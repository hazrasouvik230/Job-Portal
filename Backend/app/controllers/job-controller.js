const Job = require("../models/job-model");
const jobValidationSchema = require("../validations/job-validation");
const User = require("../models/user-model");

const generateJobDescription = require("../utils/job-description");

const jobController = {};

jobController.create = async (req, res) => {
    const { error, value } = jobValidationSchema.validate(req.body, { abortEarly: false });

    if (error) {
        return res.status(400).json({ error: error.details.map(err => err.message) });
    }

    try {
        if(req.role !== "Moderator") {
            return res.status(403).json({ error: "Forbidden: Only moderators can create jobs." });
        }

        if(!value.description || value.description.trim() === "") {
            value.description = await generateJobDescription(value);
        }

        const job = new Job({ ...value, postedBy: req.userId });
        await job.save();

        res.status(201).json({ success: true, message: "Job created successfully!", job });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Something went wrong while creating the job." });
    }
};

jobController.apply = async (req, res) => {
    const jobID = req.params.id;

    try {
        if(req.role !== "User") {
            return res.status(403).json({ error: "Forbidden: Only applicants can apply for the jobs." });
        }

        const job = await Job.findById(jobID);
        if(!job) {
            return res.status(404).json({ error: "Job not found." });
        }

        if(job.applicants.includes(req.userId)) {
            return res.status(400).json({ error: "You've already applied for this job role." });
        }

        job.applicants.push(req.userId);
        await job.save();

        const applicant = await User.findOne({ _id: req.userId });
        applicant.appliedJobs.push(jobID);
        await applicant.save();

        res.status(200).json({ success: true, message: "Applied to job successfully." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Something went wrong while apply for the job." });
    }
};

jobController.list = async (req, res) => {
    const jobID = req.params.id;

    try {
        const jobs = await Job.findOne({ _id: jobID, postedBy: req.userId });
        const applicants = jobs.applicants;

        res.status(200).json({ TotalApplicants: applicants.length, applicants });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Something went wrong while fetching the data for the application." });
    }
};

module.exports = jobController;