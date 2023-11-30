import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// routers
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

//public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

//middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(
  express.static(path.resolve(__dirname, "../../T-WEB-501-PAR_36/public"))
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);

//NOT FOUND MIDDLEWARE
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

//ERROR MIDDLEWARE
app.use(errorHandlerMiddleware);

const port = process.env.PORT;

try {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connecting to database");
    })
    .catch((err) => {
      console.log("ERROR DATABASE", err);
    });
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}