const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/user.routes");
const blogRoutes = require("./routes/blog.routes");
const { connection } = require("./db");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api", authRoutes);
app.use("/api", blogRoutes);
app.get("/", (req, res) => {
  res.json({ message: "This is Homepage" });
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
  console.log(`server running on ${process.env.PORT}`);
});