import connectDB from './config/database';
import Flashcard from './models/Flashcard';

export default async function handler(req, res) {
  await connectDB(); // Connect to the database

  switch (req.method) {
    case 'POST':
      // Create a new flashcard
      try {
        const flashcard = new Flashcard(req.body);
        await flashcard.save();
        res.status(201).json(flashcard);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;

    case 'GET':
      // Get all flashcards
      try {
        const flashcards = await Flashcard.find();
        res.json(flashcards);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
