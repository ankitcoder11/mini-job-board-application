import express from 'express';
const app = express();

app.use(express.json());

import jobsRouter from './routes/jobs.routes.js';
app.use("/api/jobs", jobsRouter);

export { app }