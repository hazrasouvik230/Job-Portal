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

        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }

        // Enforce free post limit for unsubscribed moderators
        if(!user.isSubscribed && user.jobPostCount >= 3) {
            return res.status(403).json({ error: "Free posting limit reached. Please subscribe to post more jobs." })
        }

        if(!value.description || value.description.trim() === "") {
            value.description = await generateJobDescription(value);
        }

        const job = new Job({ ...value, postedBy: req.userId });
        await job.save();

        user.jobPostCount += 1;
        await user.save();

        res.status(201).json({ success: true, message: "Job created successfully!", job });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Something went wrong while creating the job." });
    }
};

jobController.update = async (req, res) => {
    const jobID = req.params.id;
    const { error, value } = jobValidationSchema.validate(req.body, { abortEarly: false });

    if (error) {
        return res.status(400).json({ error: error.details.map(err => err.message) });
    }

    try {
        if(req.role !== "Moderator") {
            return res.status(403).json({ error: "Forbidden: Only moderators can update jobs." });
        }

        const job = await Job.findById(jobID);
        if(!job) {
            return res.status(404).json({ error: "Job not found." });
        }

        if (!value.description || value.description.trim() === "") {
            value.description = await generateJobDescription(value);
        }

        Object.assign(job, value);
        await job.save();

        res.status(201).json({ success: true, message: "Job updated successfully!", job });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Something went wrong while creating the job." });
    }
};

jobController.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json({ success: true, jobs });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Something went wrong while fetching jobs." });
    }
};

jobController.getSpecificJob = async (req, res) => {
    const jobID = req.params.id;
    try {
        const job = await Job.find({ _id: jobID });
        res.status(200).json({ success: true, job });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Something went wrong while fetching job." });
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

jobController.save = async (req, res) => {
    const jobID = req.params.id;

    try {
        if(req.role !== "User") {
            return res.status(403).json({ error: "Forbidden: Only users can save jobs." });
        }

        const job = await Job.findOne({ _id: jobID });
        if (!job) {
            return res.status(404).json({ error: "Job not found." });
        }

        const user = await User.findById(req.userId);
        if(user.savedJobs.includes(jobID)) {
            return res.status(400).json({ error: "Job already saved." });
        }

        user.savedJobs.push(jobID);
        await user.save();

        res.status(200).json({ success: true, message: "Job saved successfully." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Something went wrong while saving the job." });
    }
};

jobController.savedJobs = async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        res.status(200).json({ success: true, savedJobs: user.savedJobs })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Something went wrong while fetching saved jobs." });
    }
};

jobController.delete = async (req, res) => {
    const jobID = req.params.id;

    try {
        if (req.role !== "Moderator" || req.role !== "Admin") {
            return res.status(403).json({ error: "Forbidden: Only moderator or admin can delete jobs." });
        }

        const job = await Job.findByIdAndDelete(jobID);
        if (!job) {
            return res.status(404).json({ success: false, message: "Job not found." });
        }

        await User.updateMany({ appliedJobs: jobID }, { $pull: { appliedJobs: jobID }});
        await User.updateMany({ savedJobs: jobID }, { $pull: { savedJobs: jobID }});

        res.status(200).json({ success: true, message: "Job and associated applications deleted." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Something went wrong while deleting the job." });
    }
};

// jobController.filter = async (req, res) => {
//     const { jobType, location, experienceLevel, salary } = req.query;

//     let filterCriteria = {};

//     if (jobType) {
//         filterCriteria.jobType = jobType;
//     }
//     if (location) {
//         filterCriteria.location = location;
//     }
//     if (experienceLevel) {
//         filterCriteria.experienceLevel = experienceLevel;
//     }
//     if (salary) {
//         filterCriteria.salary = salary;
//     }
// };

module.exports = jobController;