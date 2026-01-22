import express from 'express';
import { protect } from '../middleware/auth.js';
import CompanyApplication from '../models/CompanyApplication.js';

const router = express.Router();

// @route   POST /api/companyapplications
// @desc    Submit a new company certification application
// @access  Private
router.post('/', protect, async (req, res) => {
    try {
        const {
            companyName, companyUrl, country, industries, customIndustry,
            employeesCount, address, contactName, contactRole, contactEmail,
            contactPhone, purpose, values, certificationReasons,
            employeeListeningMethods, internalTrustLevel, challenges,
            beneficiaries, positiveImpact, existingCertifications,
            publicReporting, declarationAccepted, preScreeningCall
        } = req.body;

        // Create application record
        const application = new CompanyApplication({
            userId: req.user._id,
            companyName,
            companyUrl,
            country,
            industries,
            customIndustry,
            employeesCount,
            address,
            contactName,
            contactRole,
            contactEmail,
            contactPhone,
            purpose,
            values,
            certificationReasons,
            employeeListeningMethods,
            internalTrustLevel,
            challenges,
            beneficiaries,
            positiveImpact,
            // Only include if they have values to avoid enum validation errors with empty strings
            ...(existingCertifications && { existingCertifications }),
            ...(publicReporting && { publicReporting }),
            declarationAccepted,
            preScreeningCall
        });

        const savedApplication = await application.save();

        res.status(201).json({
            success: true,
            message: "Company application submitted successfully",
            data: savedApplication
        });
    } catch (error) {
        console.error('Application submission error details:', error);
        res.status(500).json({
            success: false,
            message: error.message || "Failed to submit application",
            errors: error.errors // Mongoose validation errors
        });
    }
});

export default router;
