import express from 'express'
import { createJob, getJobs } from '../controllers/job.js'
import { checkSchema } from "express-validator"
import createJobValidator from '../middlewares/jobValidator.js'



const router = express.Router()


router.get("/", getJobs)

router.post("/register", checkSchema(createJobValidator), createJob)


export default router