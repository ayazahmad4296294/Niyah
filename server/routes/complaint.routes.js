import express from 'express';
import { submitComplaint } from '../controllers/complaint.controller.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// @route   POST /api/complaints
// @desc    Submit a new complaint
// @access  Private
router.post('/', protect, submitComplaint);

export default router;
