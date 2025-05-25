import express from 'express';
const router = express.Router();
import getRecruiter from '../controller/recruiter.js';

router.post('/api' , getRecruiter);

export default router;