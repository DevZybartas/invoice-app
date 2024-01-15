import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello world");
});

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const conn = await mongoose.connect(process.env.MONGO_CONNECTION_STRING!);
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();
