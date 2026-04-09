import express from "express";
import {
  createRecord,
  listRecords,
  getRecordById,
  updateRecord,
  deleteRecord,
} from "../controllers/recordController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/rbacMiddleware.js";
import validateRequest from "../middleware/validateRequest.js";
import {
  createRecordValidator,
  updateRecordValidator,
  recordIdValidator,
  recordListValidator,
} from "../middleware/validators.js";

const router = express.Router();

router.use(authenticate);

router.get(
  "/",
  authorize("viewer", "analyst", "admin"),
  recordListValidator,
  validateRequest,
  listRecords,
);
router.get(
  "/:id",
  authorize("viewer", "analyst", "admin"),
  recordIdValidator,
  validateRequest,
  getRecordById,
);
router.post(
  "/",
  authorize("admin"),
  createRecordValidator,
  validateRequest,
  createRecord,
);
router.patch(
  "/:id",
  authorize("admin"),
  updateRecordValidator,
  validateRequest,
  updateRecord,
);
router.delete(
  "/:id",
  authorize("admin"),
  recordIdValidator,
  validateRequest,
  deleteRecord,
);

export default router;
