import express from "express";
import "dotenv/config";

import InvoiceModel from "./models/invoice";

const app = express();

app.get("/", async (req, res) => {
  try {
    throw Error("error");
    const invoice = await InvoiceModel.find().exec();
    res.status(200).json(invoice);
  } catch (error) {
    console.log(error);
    let errorMessage = "Unknown error";
    if (error instanceof Error) errorMessage = error.message;
    res.status(500).json({ error: errorMessage });
  }
});

export default app;
