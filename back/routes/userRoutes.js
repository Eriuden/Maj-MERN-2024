import express from "express"
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from "../controllers/userController"
const router = express.Router()
import { protect } from "../middleware/authMiddleware"


router.post("/", registerUser)
router.post("/auth", authUser)
router.post("/logout", logoutUser)
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile)


export default router