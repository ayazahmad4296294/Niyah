import mongoose from 'mongoose';

const ComplaintSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    companyId: {
        type: String, // String ID as per current system design
        required: [true, 'Company ID is required']
    },
    fullName: {
        type: String,
        required: [true, 'Full name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    rating: {
        type: Number,
        required: [true, 'Rating is required'],
        min: 1,
        max: 5
    },
    complaintType: {
        type: String,
        required: [true, 'Complaint type is required'],
        enum: [
            'service issue',
            'false claim',
            'quality concern',
            'billing dispute',
            'delivery issue',
            'communication problem',
            'other'
        ]
    },
    message: {
        type: String,
        required: false // Optional
    },
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'resolved', 'dismissed']
    }
}, {
    timestamps: true,
    collection: 'complaints'
});

const Complaint = mongoose.model('Complaint', ComplaintSchema);

export default Complaint;
