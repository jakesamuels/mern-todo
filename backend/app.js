import express from "express";
import cors from "cors";
import taskRouter from "./routes/taskRoutes.js";
import errorHandler from "./middleware/errorHandlingMiddleware.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", taskRouter);

app.all("/{*splat}", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on this server!`);
  error.statusCode = 404;
  error.status = "fail";
  next(error);
});

app.use(errorHandler);

export default app;
