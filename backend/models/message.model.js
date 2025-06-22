import mongoose from "mongoose";

const messageSchma = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    message:{
        type:String,
        require:true
    },

},
{
timestamps:true
})

const Message = mongoose.model("Message", messageSchma)

export default Message
