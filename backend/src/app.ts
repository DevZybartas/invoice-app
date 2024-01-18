import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";

import InvoiceModel from "./models/invoice";

const app = express();

app.get("/", async (req, res, next) => {
  try {
    const invoice = await InvoiceModel.find().exec();
    res.status(200).json(invoice);
  } catch (error) {
    next(error);
  }
});

// Errors handling middleware

app.use((req, res, next) => {
  next(Error("Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  let errorMessage = "Unknown error";
  if (error instanceof Error) errorMessage = error.message;
  res.status(500).json({ error: errorMessage });
});

export default app;
