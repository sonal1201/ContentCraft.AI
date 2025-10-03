import express from "express";
import cors from "cors";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import "dotenv/config";
import aiRouter from "./routes/aiRoutes.js";
import connectCloudinary from "./config/cloudinary.js";
import userRoute from "./routes/userRoutes.js";

const app = express();
await connectCloudinary();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("Server is live");
});

app.use(requireAuth());

app.use("/api/ai", aiRouter);
app.use("/api/ai", userRoute);

app.listen(PORT, () => {
  console.log("Server is running on 3000");
});
