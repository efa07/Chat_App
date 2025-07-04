import path from "path";
import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js"
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js"
import {app,server} from "./socket/socket.js"
dotenv.config();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoute)

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`server is running on port ${PORT}`)
})