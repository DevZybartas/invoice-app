import mongoose from "mongoose";
import env from './validateEnv'

const connectDB = async () => {
    try {
      mongoose.set("strictQuery", false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const conn = await mongoose.connect(env.MONGO_CONNECTION_STRING);
      console.log("MongoDB Connected");
   
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

  export default connectDB