import express from 'express';
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors());

import jobsRouter from './routes/jobs.routes.js';
app.use("/api/jobs", jobsRouter);

export { app }