import express from "express";
import {registerUser,authUser, allUsers} from "../controllers/userController.js";  // Add `.js` at the end of the import

const router = express.Router();

import protect from "../middleware/authMiddleware.js";



router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);
export default router;
