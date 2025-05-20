import { Job } from "../models/jobs.model.js";

// Get all jobs
export const getJobs = async (req, res) => {
    try {
        let { page = 1, limit = 10 } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);
        if (page < 1 || limit < 1) {
            return next(createError(400, "Page and limit must be positive integers"));
        }
        const skip = (page - 1) * limit;
        const [jobs, total] = await Promise.all([
            Job.find().skip(skip).limit(limit),
            Job.countDocuments(),
        ]);

        return res.status(200).json({
            success: true,
            message: "Jobs fetched successfully",
            page,
            limit: limit,
            total: total,
            jobs,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching jobs",
            errors: [error.message],
        });
    }
};

// Get a single job
export const getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Job fetched successfully",
            data: job,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching job",
            errors: [error.message],
        });
    }
};

// Create a new job
export const createJob = async (req, res) => {
    try {
        const { title, company, location, type, description } = req.body;
        const job = new Job({
            title, company, location, type, description, image: req.file?.path || "",
        });

        await job.save();
        res.status(201).json({
            success: true,
            message: "Job created successfully",
            data: job,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create job",
            errors: [error.message],
        });
    }
};