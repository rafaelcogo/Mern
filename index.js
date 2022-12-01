require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./src/routes/users");
const authRoutes = require("./src/routes/auth");

// database connection
connection();

// middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listen on port ${port}...`));
