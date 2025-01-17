import { Router } from 'express';
const router = Router();
import { createStudentProfile, getStudentProfile, createOwnerProfile, getOwnerProfile } from '../controller/profile.controller.js';


// Routes for student profiles
router.post('/student', createStudentProfile);
router.get('/student/:id', getStudentProfile);

// Routes for owner profiles
router.post('/owner', createOwnerProfile);
router.get('/owner/:id', getOwnerProfile);


export default router;
