import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
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
    },
    trustScore: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

export default mongoose.model('Company', companySchema);
