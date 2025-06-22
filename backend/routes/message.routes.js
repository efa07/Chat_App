import express  from "express"
import protectRoute from "../middleware/protectRoute.js";
import { getMessage } from "../controllers/message.controllers.js";
import {sendMessage} from "../controllers/message.controllers.js"
const router = express.Router();

router.get("/:id",protectRoute, getMessage)
router.post("/send/:id",protectRoute, sendMessage)


export default router