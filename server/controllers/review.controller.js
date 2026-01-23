/**
 * review.controller.js
 * Manages user-generated reviews.
 * Includes logic for paginated fetching and authenticated submissions.
 */

import Review from '../models/Review.js';

/**
 * @desc    Get all reviews across companies (or filtered by multiple IDs)
 * @route   GET /api/reviews
 * @access  Public
 * @purpose Used primarily for discovery pages or global review sliders.
 */
export const getAllReviews = async (req, res) => {
    try {
        const { page = 1, limit = 9, companyIds } = req.query;
        const skip = (parseInt(page) - 1) * parseInt(limit);

        const query = {};
        // If companyIds provided, convert comma-separated string to array for $in query
        if (companyIds) {
            const ids = companyIds.split(',');
            query.companyId = { $in: ids };
        }

        const totalItems = await Review.countDocuments(query);
        const reviews = await Review.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        res.status(200).json({
            success: true,
            data: reviews,
            pagination: {
                totalItems,
                totalPages: Math.ceil(totalItems / parseInt(limit)),
                currentPage: parseInt(page),
                limit: parseInt(limit)
            }
        });
    } catch (error) {
        console.error('Error fetching all reviews:', error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

/**
 * @desc    Submit a new Review
 * @route   POST /api/reviews
 * @access  Private
 * @purpose Allows authenticated users to share detailed feedback.
 */
export const submitReview = async (req, res) => {
    const { companyId, name, email, rating, reviewText } = req.body;

    // Strict validation to ensure data completeness before DB insertion
    if (!companyId || !name || !email || !rating || !reviewText) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    // Business rule: Ratings must stay within the 1-5 star bounds
    if (rating < 1 || rating > 5) {
        return res.status(400).json({
            success: false,
            message: "Rating must be between 1 and 5"
        });
    }

    try {
        const newReview = new Review({
            userId: req.user._id, // User ID is injected by the 'protect' middleware
            companyId,
            name,
            email,
            rating,
            reviewText
        });

        await newReview.save();

        res.status(201).json({
            success: true,
            message: "Review submitted successfully"
        });
    } catch (error) {
        console.error('Error submitting review:', error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

/**
 * @desc    Get reviews for a specific company
 * @route   GET /api/reviews/:companyId
 * @access  Public
 * @purpose Populates the 'Reviews' section on the Company Detail page.
 */
export const getCompanyReviews = async (req, res) => {
    const { companyId } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const skip = (page - 1) * limit;

    try {
        // Regex search allows for case-insensitive matching of company IDs/Names
        const query = {
            companyId: { $regex: new RegExp(`^${companyId}$`, 'i') }
        };

        const totalItems = await Review.countDocuments(query);
        const reviews = await Review.find(query)
            .sort({ createdAt: -1 }) // Sort by newest first
            .skip(skip)
            .limit(limit);

        res.status(200).json({
            success: true,
            data: reviews,
            pagination: {
                totalItems,
                totalPages: Math.ceil(totalItems / limit),
                currentPage: page,
                limit
            }
        });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};
