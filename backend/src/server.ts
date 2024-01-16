import express from "express";
import "dotenv/config";
import connectDB from "./utils/db";
import env from './utils/validateEnv'

const app = express();

const PORT = env.PORT;

app.get("/", (req, res) => {
  res.send("hello world");
});



connectDB();

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});