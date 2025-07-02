import mongoose from "mongoose"
import Conversation from "../models/converstion.model.js"
import Message from "../models/message.model.js"
import {getReceiverSocketId,io} from "../socket/socket.js"
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body
    const { id: receiverId } = req.params
    const senderId = req.user._id

    
let conversation = await Conversation.findOne({
  participants: {
    $all: [
      new mongoose.Types.ObjectId(senderId),
      new mongoose.Types.ObjectId(receiverId),
    ],
  },
});

if (!conversation) {
  conversation = await Conversation.create({
    participants: [
      new mongoose.Types.ObjectId(senderId),
      new mongoose.Types.ObjectId(receiverId),
    ],
  });
}
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    })

    if (newMessage) {
      conversation.messages.push(newMessage._id)
    }


    await Promise.all([newMessage.save(),conversation.save()])
    
    const receiverSocketId = getReceiverSocketId(receiverId)
    if(receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage",newMessage)
    }
    
    res.status(201).json(newMessage)

  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      error: "internal server error",
    })
  }
}

export const getMessage = async (req,res) => {
try{
const {id: userChatId} = req.params
const senderId = req.user._id

const conversation = await Conversation.findOne({
  participants: {$all: [ new mongoose.Types.ObjectId(senderId),
      new mongoose.Types.ObjectId(userChatId),]}
}).populate("messages")
if (!conversation) {
    return res.status(404).json({ error: "Conversation not found" });
  }
res.status(200).json(conversation.messages)

}catch (error) {
    console.log(error.message)
    res.status(500).json({
      error: "internal server error",
    })
  }
}