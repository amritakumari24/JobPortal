import express from "express";
import { register, login, updateProfile } from "../controller/user.controller.js"
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(updateProfile, isAuthenticated);



export default router;