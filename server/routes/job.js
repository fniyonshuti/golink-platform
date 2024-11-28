import express from 'express'


const router = express.Router()


router.get("/", (req, res) => {
    res.send("ALL JOBS")
})

router.post("/register", (req, res) => {
    res.send("registering a job ...")
})


export default router