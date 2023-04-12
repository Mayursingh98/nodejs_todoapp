// installed npm i express mongoose dotenv cookie-parser

import express from "express";
import router from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

config({ path: "./data/config.env" });

export const app = express();

// Using Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

// Using routes
app.use("/api/v1/users", router);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.send("Everything is working");
});

// Using Error Middleware
app.use(errorMiddleware);
