import express from "express"
import protectRoute from "../middleware/protectRoute.js"
import {getUserForSiderbar,getMyInfo} from "../controllers/user.controller.js"

const router = express.Router()

router.get("/",protectRoute, getUserForSiderbar)
router.get("/my",protectRoute,getMyInfo)

export default router;