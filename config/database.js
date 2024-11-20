// Import the mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {

    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
