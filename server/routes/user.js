import express from "express"

const router = express.Router()


router.post("/login", (req, res) => {
    res.send("LOGGING IN ...")
})



router.post("/register", (req, res) => {
    res.send("registering a user ...")
})


export default router
