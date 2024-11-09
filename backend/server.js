const express = require("express");
const dotenv = require("dotenv");
const DBconnect = require("./config/db");
const cors = require("cors");


dotenv.config();
const app = express();

DBconnect();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
