import { matchedData, validationResult } from "express-validator";
import Job from "../models/job.js";
import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config()



const getJobs = async (req, res) => {

    try {
        const jobs = await Job.find()

        return res.status(200).json({jobs: jobs})
    } catch (error) {
      return res.status(500).json({
        message: "Something went wrong"
      })  
    }
    
}


const createJob = async (req, res) => {
    try {

        const authHeader = req.headers["authorization"]; // Get the Authorization header
        const token = authHeader && authHeader.split(" ")[1]; // Extract the token after "Bearer"

    if (!token) return res.status(401).json({ message: "Access token is missing or invalid" });
    

    // Verify the token
    const email = await jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(403).json({ message: "Token is invalid or expired" });
        }
        return payload.email
    });

    console.log("Email: ",email)
    const result = validationResult(req)
    if(!result.isEmpty()) return res.status(400).json({error: result.array()[0].msg})

    const data = matchedData(req)


    if(email != "admin@gmail.com") return res.status(403).json({error: "you are not authorized to perform this action"})
    
    const createdJob = await Job.create(data)

    console.log(createdJob)



    return res.status(201).json({
        message: "Job created successfully",
        job: createdJob
    })
    } catch (error) {
        console.log(`Something went wrong, Error: ${error.message}`)
        return res.status(500).json({
            error: "Something went wrong"
        })
    }
}


export {createJob, getJobs}