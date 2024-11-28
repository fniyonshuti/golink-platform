import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()



const MONGO_URI = process.env.MONGO_URI


const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)

        console.log("DB CONNECTED SUCCESSFULLY!")
    } catch (error) {
        console.log(`SOMETHING WENT WRONG WHILE CONNECTING TO DB ====> ${error.message}`)
    }
}


export default connectDB