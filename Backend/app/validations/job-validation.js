const Joi = require("joi");

const jobValidationSchema = Joi.object({
    title: Joi.string().trim().required(),
    company: Joi.string().trim().required(),
    location: Joi.string().trim().required(),
    jobType: Joi.string().valid("Full-Time", "Part-Time", "Internship", "Contract", "Remote").required(),
    description: Joi.string().allow(""),
    requirements: Joi.array().items(Joi.string()).default([]),
    salary: Joi.string().default("Negotiable"),
    experienceLevel: Joi.string().valid("Fresher", "Junior", "Mid", "Senior", "Lead").default("Fresher"),
    deadline: Joi.date().required()
});

module.exports = jobValidationSchema;