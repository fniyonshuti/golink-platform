import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import connectDB from "./utils/db.js";
import userRouter from "./routes/user.js"
import jobRouter from "./routes/job.js"
dotenv.config()



const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())



// USER ROUTES

app.use("/api/jobs", jobRouter)
app.use("/api/users", userRouter)


// CONNECT TO DB

await connectDB()



const PORT = process.env.PORT || 3000


app.get("/api", (req, res) => {
    console.log(req.headers)
    res.send("WELCOME TO THE GO LINK PLATFORM")
})



// create the server

try {
    app.listen(PORT, () => {
        console.log(`Server is listening on PORT ${PORT}`)
    })
} catch (error) {
    console.log(`Something went wrong ${error.message}`)
}