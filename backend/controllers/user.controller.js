import User from "../models/user.model.js"

export const getUserForSiderbar = async (req , res)=> {
    try{
        const loggedinUserId = req.user._id
        const allUser = await User.find({_id :{$ne: loggedinUserId}}).select("-password")
        res.status(200).json(allUser)
    }
    catch(error){
        console.error(error.message)
        res.status(500).json("internal server error")
    }
}