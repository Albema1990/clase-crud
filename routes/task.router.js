import { Router } from "express";

const router = Router();

import { getTasks } from '../controllers/task.controller.js';
import { getTaskById } from '../controllers/task.controller.js';
import { createTask } from '../controllers/task.controller.js';
import { updateTask } from '../controllers/task.controller.js';
import { deleteTask } from '../controllers/task.controller.js';


router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router; 