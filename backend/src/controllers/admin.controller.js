import Course from "../models/Course.js";
import Lecture from "../models/Lecture.js";
import User from "../models/User.js";

export const getInstructors = async (req, res) => {
  const instructors = await User.find({ role: "instructor" });
  res.json(instructors);
};

export const createCourse = async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
};

export const addLecture = async (req, res) => {
    console.log("REQ BODY 👉", req.body);
  try {
    const { courseId, instructorId, date } = req.body;

    // 🛑 Validate date input
    if (!date) {
      return res.status(400).json({ message: "Date is required" });
    }

    const lectureDate = new Date(date);

    if (isNaN(lectureDate.getTime())) {
      return res.status(400).json({ message: "Invalid date format" });
    }

    // normalize date (remove time)
    lectureDate.setHours(0, 0, 0, 0);

    // 🚫 Clash check
    const clash = await Lecture.findOne({
      instructorId,
      date: lectureDate,
    });

    if (clash) {
      return res
        .status(400)
        .json({ message: "Instructor already assigned on this date" });
    }

    const lecture = await Lecture.create({
      courseId,
      instructorId,
      date: lectureDate,
    });

    res.status(201).json(lecture);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

