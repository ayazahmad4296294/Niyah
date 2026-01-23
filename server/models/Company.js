/**
 * Company.js
 * Mongoose model for Organizations.
 * Represents the core entity for certification and public feedback.
 */

import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        // Used for filtering and industry grouping in the directory
    },
    name: {
        type: String,
        required: true,
        unique: true
        // Unique constraint ensures data integrity for certification lookup
    },
    description: String,
    email: String,
    website: String,
    phone: String,
    address: String,
    location: {
        lat: Number,
        lng: Number
    },
    verificationStatus: {
        type: String,
        enum: ['Verified', 'Pending', 'Unverified'],
        default: 'Pending'
        // Controls UI badges and accessibility in the directory
    },
    trustScore: {
        type: Number,
        default: 0
        // Aggregated value representing user confidence and official compliance
    }
}, {
    timestamps: true // Automatically tracks createdAt and updatedAt for audit logs
});

export default mongoose.model('Company', companySchema);
