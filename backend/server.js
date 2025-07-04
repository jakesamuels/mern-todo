import app from "./app.js";
import { connectDB } from "./config/db.js";
const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  } catch (error) {
    console.error("Failed to connect to database: ", error);
    process.exit(1);
  }
};

startServer();
