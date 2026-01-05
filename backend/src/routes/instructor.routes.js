import express from "express";
import auth from "../middleware/authMiddleware.js";
import role from "../middleware/roleMiddleware.js";
import { getMyLectures } from "../controllers/instructor.controller.js";

const router = express.Router();

router.get("/lectures", auth, role("instructor"), getMyLectures);

export default router;
