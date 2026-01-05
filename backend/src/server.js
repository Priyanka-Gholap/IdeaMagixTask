import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import instructorRoutes from "./routes/instructor.routes.js";

dotenv.config();

const app = express();

/* CORS */
app.use(cors());

/* Body parser */
app.use(express.json());

/* Routes */
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/instructor", instructorRoutes);

/* Start server ONLY after DB connects */
connectDB().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
  });
});
