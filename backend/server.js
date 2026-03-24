require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// AUTH ROUTE
app.use("/api/auth", require("./routes/auth"));
app.use("/api/admissions", require("./routes/admissions"));
app.use("/api/placements", require("./routes/placements"));
app.use("/api/events", require("./routes/events"));

app.get("/", (req, res) => {
  res.send("Campus Portal API is running");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
