import express from "express";
import { login } from "../controllers/authController.js";
import validateRequest from "../middleware/validateRequest.js";
import { loginValidator } from "../middleware/validators.js";

const router = express.Router();

router.post("/login", loginValidator, validateRequest, login);



export default router;
