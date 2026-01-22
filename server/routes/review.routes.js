import { submitReview, getCompanyReviews, getAllReviews } from '../controllers/review.controller.js';
import express from 'express';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Route to get all reviews - public
router.get('/', getAllReviews);

// Route to submit review - must be authenticated
router.post('/', protect, submitReview);

// Route to get reviews for a specific company - public
router.get('/:companyId', getCompanyReviews);

export default router;
