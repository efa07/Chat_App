import { Server } from "socket.io";
import http from  "http"
import express from "express"

const app = express()
const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:["https://chat-app-aphg.onrender.com"],
        methods: ["GET","POST"]
    },
})

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId]
}

const userSocketMap = {}


io.on("connect" ,(socket) => {
    console.log("user connected",socket.id)
	const userId = socket.handshake.query.userId;
	if (userId != "undefined") userSocketMap[userId] = socket.id;

    io.emit("getOnlineUser",Object.keys(userSocketMap))

    socket.on("disconnect", () => {
        console.log("user disconnect", socket.id)
        delete userSocketMap[userId]
            io.emit("getOnlineUser",Object.keys(userSocketMap))

    })
} )



export {app,server,io}