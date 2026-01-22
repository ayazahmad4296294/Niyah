import mongoose from 'mongoose';

const RatingSchema = new mongoose.Schema({
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
    message: {
        type: String,
        required: false // Optional
    }
}, {
    timestamps: true,
    collection: 'ratings'
});

const Rating = mongoose.model('Rating', RatingSchema);

export default Rating;
