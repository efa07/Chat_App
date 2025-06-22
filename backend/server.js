import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import MessageRouth from "./routes/message.routes.js"
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js"


const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/messages",MessageRouth)
app.use("/api/users", userRoute)

app.get("/", (req,res) => {
    res.send("hello efa")
})




app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`app is running on port ${PORT}`)
})