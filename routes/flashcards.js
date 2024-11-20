const express = require('express');
const router = express.Router();
const Flashcard = require('../models/Flashcard');

// Create a new flashcard
router.post('/', async (req, res) => {
  try {
    const flashcard = new Flashcard(req.body);
    await flashcard.save();
    res.status(201).json(flashcard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all flashcards
router.get('/', async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.json(flashcards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a flashcard
router.put('/:id', async (req, res) => {
  try {
    const flashcard = await Flashcard.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(flashcard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a flashcard
router.delete('/:id', async (req, res) => {
  try {
    await Flashcard.findByIdAndDelete(req.params.id);
    res.json({ message: 'Flashcard deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
