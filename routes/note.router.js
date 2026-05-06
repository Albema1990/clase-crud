import { Router } from "express";

const router = Router();

import { getNotes } from '../controllers/note.controller.js';
import { getNoteById } from '../controllers/note.controller.js';
import { createNote } from '../controllers/note.controller.js';
import { updateNote } from '../controllers/note.controller.js';

router.get("/", getNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);

export default router;