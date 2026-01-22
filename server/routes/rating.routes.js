import express from 'express';
import { submitRating } from '../controllers/rating.controller.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// @route   POST /api/ratings
// @desc    Submit a new rating
// @access  Private
router.post('/', protect, submitRating);

export default router;
