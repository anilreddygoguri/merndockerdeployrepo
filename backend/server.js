const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const User = require("./models/User");  // 📌 Import the User model

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mernDB";

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Sample route
app.get("/", (req, res) => {
  res.send("MERN Backend is Running!");
});

// Route to add a user
app.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get("/users", async (req, res) => {
    try {
      const users = await User.find(); // Fetch all users from MongoDB
      res.status(200).json(users); // Send the user list as JSON
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// I am just trying to merge
