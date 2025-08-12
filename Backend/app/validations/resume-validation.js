const Joi = require("joi");

const resumeValidationSchema = Joi.object({
    address: Joi.string().allow("", null),
    mobile: Joi.string().pattern(/^[0-9+()\- ]{7,20}$/).allow("", null),
    socialMedias: Joi.array().items(Joi.string().uri()).optional(),
    educations: Joi.array().items(Joi.string()).optional(),
    skills: Joi.array().items(Joi.string()).optional(),
    projects: Joi.array().items(Joi.string()).optional(),
    experiences: Joi.array().items(Joi.string()).optional(),
    languages: Joi.array().items(Joi.string()).optional(),
    interests: Joi.array().items(Joi.string()).optional()
});

module.exports = resumeValidationSchema;