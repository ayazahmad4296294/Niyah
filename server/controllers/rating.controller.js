import Rating from '../models/Rating.js';

// @desc    Submit a Rating for a company
// @route   POST /api/ratings
// @access  Private
export const submitRating = async (req, res) => {
    try {
        const { companyId, fullName, email, rating, message } = req.body;

        // Validation
        if (!companyId || !fullName || !email || !rating) {
            return res.status(400).json({
                success: false,
                message: "Company ID, Full Name, Email, and Rating are required"
            });
        }

        if (rating < 1 || rating > 5) {
            return res.status(400).json({
                success: false,
                message: "Rating must be between 1 and 5"
            });
        }

        const newRating = new Rating({
            userId: req.user._id, // From auth middleware
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
