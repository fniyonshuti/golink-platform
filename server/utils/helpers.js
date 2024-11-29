import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"


dotenv.config()



const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    return hashedPassword
}


const comparePasswords = async (password, hashedPassword) => {
    const passwordsMatch = await bcrypt.compare(password, hashedPassword)

    return passwordsMatch
}


const generateJWTauthToken = (payload) => {
    const JWT_SECRET = process.env.JWT_SECRET

    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '7d'
    })

    return token
}



export { hashPassword, comparePasswords, generateJWTauthToken }