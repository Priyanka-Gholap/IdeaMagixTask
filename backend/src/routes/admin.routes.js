import express from "express";
import {
  getInstructors,
  createCourse,
  addLecture,
} from "../controllers/admin.controller.js";
import auth from "../middleware/authMiddleware.js";
import role from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/instructors", auth, role("admin"), getInstructors);
router.post("/course", auth, role("admin"), createCourse);
router.post("/lecture", auth, role("admin"), addLecture);

export default router;
