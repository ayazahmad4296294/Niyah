import Review from '../models/Review.js';

// @desc    Get all reviews
// @route   GET /api/reviews
// @access  Public
export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: reviews.length,
            data: reviews
        });
    } catch (error) {
        console.error('Error fetching all reviews:', error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

// @desc    Submit a Review
// @route   POST /api/reviews
// @access  Private (Authenticated users only)
export const submitReview = async (req, res) => {
    const { companyId, name, email, rating, reviewText } = req.body;

    // Validate missing fields
    if (!companyId || !name || !email || !rating || !reviewText) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    // Validate rating range
    if (rating < 1 || rating > 5) {
        return res.status(400).json({
            success: false,
            message: "Rating must be between 1 and 5"
        });
    }

    try {
        const newReview = new Review({
            userId: req.user._id, // From protect middleware
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
// @desc    Get reviews for a specific company
// @route   GET /api/reviews/:companyId
// @access  Public
export const getCompanyReviews = async (req, res) => {
    const { companyId } = req.params;

    try {
        const reviews = await Review.find({
            companyId: { $regex: new RegExp(`^${companyId}$`, 'i') }
        }).sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: reviews.length,
            data: reviews
        });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};
