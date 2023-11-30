import { Router } from "express";
const router = Router();

import {
  getAllProperJobs,
  getAllJobs,
  getJob,
  createJob,
  editJob,
  deleteJob,
} from "../controllers/jobController.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";

// Create Jobs
router
  .route("/hirer/createJob")
  .post([authorizePermissions("hirer"), createJob]);

// Fetch all jobs
router.get("/hirer/allJobs", [authorizePermissions("hirer"), getAllProperJobs]);

router.route("/").get(getAllJobs);
// .post(validateJobInput, createJob);
router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch([
    authorizePermissions("hirer"), // Add permission check for editing
    validateJobInput,
    validateIdParam,
    editJob,
  ])
  .delete([
    authorizePermissions("hirer"), // Add permission check for deleting
    validateIdParam,
    deleteJob,
  ]);

export default router;
