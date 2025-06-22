import User from "../models/user.model.js"
import { v4 as uuid } from 'uuid';
import bcrypt from "bcrypt"
import generateToken from "../utils/generateToken.js";

//signup
export const signup = async (req,res) => {
    try{
        const {fullName,username,password,confirmPassword,gender} = req.body;

        if(password != confirmPassword){
            return res.status(400).json({error:"password don't match"})
        }

        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({error:`user with username ${username} already exist`})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const avatarSeed = username || uuid()
        const avatarUrl = `https://api.dicebear.com/7.x/adventurer/svg?seed=${avatarSeed}`

        const newUser = await new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic:avatarUrl
        })
        if(newUser){
        generateToken(newUser._id,res)
        await newUser.save()
        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            username:newUser.username,
            profilePic:newUser.profilePic
        })
    }else{
        res.status(400).json({
            error:"Invalid user data"
        })
    }
        
    }catch(error){
        res.status(500).json({
            error:"Internal server error"
        })
        console.log(error.message)
    }
}
//login
export const login = async (req,res) => {
    try{
const {username,password} = req.body;
const user = await User.findOne({username})
const isPassword = await bcrypt.compare(password,user?.password || "") 

if(!user || !isPassword){
    res.status(400).json({error:"invalid username or password"})
}
generateToken(user._id,res)
res.status(200).json({
    _id:user._id,
    fullName:user.fullName,
    username:user.username,
    profilePic:user.profilePic
})
    }catch(error){
console.log(error.message)
res.status(500).json({error:"internal server error"})
    }
}

//logout
export const logout = (req,res) => {
   try{
    res.cookie("jwt","",{maxAge:0})
    res.status(200).json({message:"logged out successfully"})

   }catch(error){
    console.log(error.message)
res.status(500).json({error:"internal server error"})
   }
}