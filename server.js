const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

// ✅ ADD YOUR AUTH ROUTES HERE
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes); // This means: /api/auth/login will work

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


