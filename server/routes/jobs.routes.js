import { Router } from "express";
import { validateBody } from './../middlewares/validate.body.js';
import { jobSchema } from "../utiles/job.validator.js";
import { upload } from "../middlewares/upload.js";
import { createJob, getJobById, getJobs } from "../controllers/jobs.controllers.js";

const router = Router();
router.route("/").get(getJobs);
router.route("/:id").get(getJobById);
router.route("/create").post(upload.single("image"), validateBody(jobSchema), createJob);

export default router