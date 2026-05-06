import Note from "../models/note.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Error getting notes" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const notes = await Note.findById(id);
    if (!notes) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(notes);
  } catch (error) {
    res.status(400).json({ message: "Error getting note" });
  }
};

export const createNote = async (req, res) => {
  try {
    const notes = new Note(req.body);
    await notes.save();
    res.status(201).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Error creating note" });
  }
};

export const updateNote = (req, res) => {
  try {
    const { id } = req.params;
    const updateNote = Note.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });
    if (!updateNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(updateNote);
  } catch (error) {
    res.status(400).json({ message: "Error updating note" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteNote = await Note.findByIdAndDelete(id);
    if (!deleteNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(deleteNote);
  } catch (error) {
    res.status(400).json({ message: "Error deleting note" });
  }
};
