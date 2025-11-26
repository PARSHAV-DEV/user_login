import dotenv from "dotenv";
dotenv.config();  // MUST BE FIRST

import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

// Connect DB AFTER dotenv
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
