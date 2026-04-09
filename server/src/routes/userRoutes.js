import express from "express";
import {
  createUser,
  listUsers,
  updateUser,
} from "../controllers/userController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/rbacMiddleware.js";
import validateRequest from "../middleware/validateRequest.js";
import {
  createUserValidator,
  updateUserValidator,
} from "../middleware/validators.js";

const router = express.Router();

router.use(authenticate, authorize("admin"));

router.get("/", listUsers);
router.post(
  "/",
  createUserValidator,
  validateRequest,
  createUser,
);
router.patch(
  "/:id",
  updateUserValidator,
  validateRequest,
  updateUser,
);

export default router;
