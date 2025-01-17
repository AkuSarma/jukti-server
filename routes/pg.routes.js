import express from 'express';
import { createPG, getPGs, getPGById, updatePG, deletePG } from '../controller/pg.controller.js';

const router = express.Router();

router.post('/', createPG);
router.get('/', getPGs);
router.get('/:id', getPGById);
router.put('/:id', updatePG);
router.delete('/:id', deletePG);

export default router;
