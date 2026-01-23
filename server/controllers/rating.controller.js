/**
 * rating.controller.js
 * Handles lightweight star ratings for companies.
 * This separate controller allows for quick numerical feedback without full reviews.
 */

import Rating from '../models/Rating.js';

/**
 * @desc    Submit a Rating for a company
 * @route   POST /api/ratings
 * @access  Private
 * @purpose Collects quantitative trust data for score calculation.
 */
export const submitRating = async (req, res) => {
    try {
        const { companyId, fullName, email, rating, message } = req.body;

        // Basic validation: ensures core data points are present
        if (!companyId || !fullName || !email || !rating) {
            return res.status(400).json({
                success: false,
                message: "Company ID, Full Name, Email, and Rating are required"
            });
        }

        // Integrity check: prevents automated or malicious out-of-bounds ratings
        if (rating < 1 || rating > 5) {
            return res.status(400).json({
                success: false,
                message: "Rating must be between 1 and 5"
            });
        }

        const newRating = new Rating({
            userId: req.user._id, // Extracted from decoded JWT by the auth middleware
            companyId,
            fullName,
            email,
            rating,
            message
        });

        await newRating.save();

        res.status(201).json({
            success: true,
            message: "Rating submitted successfully",
            data: newRating
        });

    } catch (error) {
        console.error('Error submitting rating:', error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};
