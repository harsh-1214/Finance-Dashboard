import express from "express";
import {
  getSummary,
  getCategoryTotals,
  getMonthlyTrends,
} from "../controllers/dashboardController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/rbacMiddleware.js";
import validateRequest from "../middleware/validateRequest.js";
import { dashboardQueryValidator } from "../middleware/validators.js";

const router = express.Router();

router.use(authenticate, authorize("analyst", "admin"));

router.get(
  "/summary",
  dashboardQueryValidator,
  validateRequest,
  getSummary,
);
router.get(
  "/categories",
  dashboardQueryValidator,
  validateRequest,
  getCategoryTotals,
);
router.get(
  "/trends/monthly",
  dashboardQueryValidator,
  validateRequest,
  getMonthlyTrends,
);

export default router;
