const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const flashcardRoutes = require('./routes/flashcards');
require('dotenv').config();

const app = express();

const whitelist = ['https://memorease-lilac.vercel.app/'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/flashcards', flashcardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
