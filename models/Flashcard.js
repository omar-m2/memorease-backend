// Import the mongoose library to interact with MongoDB
const mongoose = require('mongoose');

const FlashcardSchema = new mongoose.Schema({
  question: { type: String, required: true }, // Define the 'question' field as a required string
  answer: { type: String, required: true }, // Define the 'answer' field as a required string
});

// Export the Flashcard model based on the defined schema
module.exports = mongoose.model('Flashcard', FlashcardSchema);
