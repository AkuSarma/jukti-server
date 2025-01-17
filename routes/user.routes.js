import { Router } from 'express';
const router = Router();
import { register, login, getAllUsers } from '../controller/user.controller.js';

router.post('/register', register);
router.post('/login', login);
router.get('/users', getAllUsers);

export default router;
