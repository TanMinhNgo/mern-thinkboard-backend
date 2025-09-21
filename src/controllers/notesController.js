import Note from '../models/Note.js';

const notesController = {
    getNotes: async (req, res) => {
        try {
            const notes = await Note.find().sort({ createdAt: -1 });
            res.status(200).json({ data: notes });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },

    getNoteById: async (req, res) => {
        try {
            const note = await Note.findById(req.params.id);
            if (!note) {
                return res.status(404).json({ message: 'Note not found' });
            }
            res.status(200).json({ data: note });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },

    createNote: async (req, res) => {
        const { title, content } = req.body;
        try {
            const newNote = new Note({ title, content });
            await newNote.save();
            res.status(201).json({ message: 'Note created successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },

    updateNote: async (req, res) => {
        const { title, content } = req.body;
        try {
            const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
            if (!updatedNote) {
                return res.status(404).json({ message: 'Note not found' });
            }
            res.status(200).json({ message: 'Note updated successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },

    deleteNote: async (req, res) => {
        try {
            const deletedNote = await Note.findByIdAndDelete(req.params.id);
            if (!deletedNote) {
                return res.status(404).json({ message: 'Note not found' });
            }
            res.status(200).json({ message: 'Note deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }
};

export default notesController;