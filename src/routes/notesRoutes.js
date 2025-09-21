import express from 'express';
import notesController from '../controllers/notesController.js';

const router = express.Router();

router.get('/', notesController.getNotes);
router.get('/:id', notesController.getNoteById);
router.post('/', notesController.createNote);
router.put('/:id', notesController.updateNote);
router.delete('/:id', notesController.deleteNote);

export default router;