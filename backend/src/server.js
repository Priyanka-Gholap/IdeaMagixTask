import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import instructorRoutes from "./routes/instructor.routes.js";

dotenv.config();

const app = express();

/* ======================
   ✅ CORS (EXPRESS 5 SAFE)
====================== */
app.use(cors());

/* ======================
   Body Parser
====================== */
app.use(express.json());

/* ======================
   Routes
====================== */
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/instructor", instructorRoutes);

/* ======================
   DB + Server
====================== */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server running");
    });
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });
