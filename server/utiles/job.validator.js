import Joi from "joi";

export const jobSchema = Joi.object({
    title: Joi.string().trim().min(1).required().messages({
        "string.empty": "Title is required and cannot be empty.",
        "any.required": "Title is required.",
    }),
    company: Joi.string().trim().min(1).required().messages({
        "string.empty": "Company is required and cannot be empty.",
        "any.required": "Company is required.",
    }),
    location: Joi.string().trim().min(1).required().messages({
        "string.empty": "Location is required and cannot be empty.",
        "any.required": "Location is required.",
    }),
    image: Joi.string().uri().allow('').optional().messages({
        "string.uri": "Image must be a valid URI if provided.",
    }),
    type: Joi.string().valid("Full-time", "Part-time").required().messages({
        "any.only": "Type must be one of Full-time or Part-time.",
        "any.required": "Type is required.",
    }),
    description: Joi.string().allow('').optional().messages({
        "string.base": "Description must be a string.",
    }),
});