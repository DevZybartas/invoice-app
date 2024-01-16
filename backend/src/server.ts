import app from "./app";
import connectDB from "./utils/db";
import env from "./utils/validateEnv";

const PORT = env.PORT;

connectDB();

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
