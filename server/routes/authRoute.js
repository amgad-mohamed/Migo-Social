import express from "express";
import { register, login, currentUser } from "../controllers/auth.js";
import { requireSignin } from "../middleware/auth.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/current-user",requireSignin, currentUser);
export default router;
