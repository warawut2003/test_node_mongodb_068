const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
dotenv.config();

// MongoDB Config
mongoose.connect(process.env.MONGO_URI,{}).then(()=> console.log("Mongo DB Connect"))
.catch(err => console.log(err));

// Routing Config
const BookRoutes = require('./routes/books');
app.use('/api',BookRoutes);

// Server Running
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});
