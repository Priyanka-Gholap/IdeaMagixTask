import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: String,
  level: String,
  description: String,
  image: String,
});

export default mongoose.model("Course", courseSchema);
