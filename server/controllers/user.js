import User from "../models/user.js";
import { matchedData, validationResult } from "express-validator";
import { comparePasswords, generateJWTauthToken, hashPassword } from "../utils/helpers.js";



const registerUser = async (req, res) => {
   try {
    const result = validationResult(req)
    if(!result.isEmpty()) return res.status(400).json({error: result.array()[0].msg})

    const data = matchedData(req)
    const password = data.password
    const confirmPassword = data.confirmPassword


    if(confirmPassword != password ) return res.status(400).json({error: "Passwords do not match"})


    const existingEmail = await User.findOne({email: data.email})

    if(existingEmail) return res.status(400).json({error: "Email already in use"})


    const hashedPassword = await hashPassword(password)

    data.password = hashedPassword
    

    const registeredUser = await User.create(data)
    delete registeredUser.password

    const authToken = generateJWTauthToken({email: registerUser.email})

    return res.status(201).json({message: "user registered successfully", token: authToken, user: registeredUser})
    
   } catch (error) {
    return res.status(500).json({error: "Something went wrong"})
   } 
}

const loginUser = async (req, res) => {

    try {
        const result = validationResult(req)
        if(!result.isEmpty()) return res.status(400).json({error: result.array()[0].msg})
    
        const data = matchedData(req)
    
        const user = await User.findOne({email: data.email})
    
        if(!user) return res.status(403).json({error: "invalid credentials"})
        const passwordsMatch = await comparePasswords(data.password, user.password)
        console.log(passwordsMatch)
    
        if(!passwordsMatch) return res.status(401).json({
            error: "Invalid email or password"
        })

        delete user.password
    
    
        const authToken = generateJWTauthToken({email: user.email})
        return res.status(200).json({
            message: "Logged in successfully!",
            token: authToken,
            user
        })  
    } catch (error) {
        return res.status(500).json({error: "Something went wrong"}) 
    }
    

}



export {registerUser, loginUser}