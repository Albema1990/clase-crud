import Note from '../models/note.js';
 
export const getNotes = async (req, res) => {
   const notes = await Note.find();
   res.json(notes);
}

export const getNoteById = async (req, res) => {
   const { id } = req.params;
   const notes = await Note.findById(id);
   if (!notes) {
      return res.status(404).json({ message: 'Note not found' });
   }
   res.json(notes);
}

export const createNote = async (req, res) => {
   const notes = new Note(req.body);
   await notes.save();
   res.status(201).json(notes);
}

export const updateNote = (req, res) => {
   const { id } = req.params;
   const updateNote = Note.findByIdAndUpdate(id, req.body, {
      returnDocument: 'after'
   });
   if (!updateNote) {
      return res.status(404).json({ message: 'Note not found' });
   }
   res.json(updateNote);
}