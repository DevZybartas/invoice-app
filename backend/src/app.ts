import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import invoicesRoutes from "./routes/invoicesRoutes";
import cors from "cors";

const app = express();

// accept jason bodies
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api/invoices", invoicesRoutes);

// Errors handling middleware

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "Unknown error";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});

export default app;
