import { Router } from "express";

const router = Router();

import { getTasks } from '../controllers/task.controller.js';
import { getTaskById } from '../controllers/task.controller.js';
import { createTask } from '../controllers/task.controller.js';
import { updateTask } from '../controllers/task.controller.js';


router.get('/', getTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.put('/:id', updateTask);

export default router; 