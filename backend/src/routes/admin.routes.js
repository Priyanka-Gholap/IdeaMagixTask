import express from "express";
import Course from "../models/Course.js";
import User from "../models/User.js";
import Lecture from "../models/Lecture.js";

const router = express.Router();

// Dashboard counts
router.get("/dashboard-stats", async (req, res) => {
  try {
    const totalCourses = await Course.countDocuments();
    const totalInstructors = await User.countDocuments({ role: "instructor" });
    const totalLectures = await Lecture.countDocuments();

    const upcomingLectures = await Lecture.countDocuments({
      date: { $gte: new Date() }
    });

    res.json({
      totalCourses,
      totalInstructors,
      totalLectures,
      upcomingLectures
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch dashboard stats" });
  }
});

router.post("/courses", async (req, res) => {
  try {
    const { name, level, description, image } = req.body;

    if (!name || !level || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const course = await Course.create({
      name,
      level,
      description,
      image,
    });

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: "Failed to add course" });
  }
});

export default router;
