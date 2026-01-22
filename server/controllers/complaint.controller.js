import Complaint from '../models/Complaint.js';

// @desc    Submit a Complaint against a company
// @route   POST /api/complaints
// @access  Private
export const submitComplaint = async (req, res) => {
    try {
        const { companyId, fullName, email, rating, complaintType, message } = req.body;

        // Validation
        if (!companyId || !fullName || !email || !rating || !complaintType) {
            return res.status(400).json({
                success: false,
                message: "Company ID, Full Name, Email, Rating, and Complaint Type are required"
            });
        }

        if (rating < 1 || rating > 5) {
            return res.status(400).json({
                success: false,
                message: "Rating must be between 1 and 5"
            });
        }

        // Validate Complaint Type Enum
        const validTypes = [
            'service issue',
            'false claim',
            'quality concern',
            'billing dispute',
            'delivery issue',
            'communication problem',
            'other'
        ];

        if (!validTypes.includes(complaintType)) {
            return res.status(400).json({
                success: false,
                message: "Invalid complaint type"
            });
        }

        const newComplaint = new Complaint({
            userId: req.user._id, // From auth middleware
            companyId,
            fullName,
            email,
            rating,
            complaintType,
            message
        });

        await newComplaint.save();

        res.status(201).json({
            success: true,
            message: "Complaint submitted successfully",
            data: newComplaint
        });

    } catch (error) {
        console.error('Error submitting complaint:', error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};
