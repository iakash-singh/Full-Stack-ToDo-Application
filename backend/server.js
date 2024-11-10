const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const connectDatabase = require("./config/database");
const errorMiddleware = require("./middleware/errorMiddleware");

dotenv.config();
const app = express();

connectDatabase();

// app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(cors({
    origin: ["https://to-do-task-akash.netlify.app"],
    credentials: true,
  }));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(errorMiddleware);


app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
