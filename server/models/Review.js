import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    companyId: {
        type: String, // String ID of the company being reviewed
        required: [true, 'Company ID is required']
    },
    name: {
        type: String,
        required: [true, 'Name is required']
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
    reviewText: {
        type: String,
        required: [true, 'Review text is required']
    }
}, {
    timestamps: true,
    collection: 'reviews'
});

const Review = mongoose.model('Review', ReviewSchema);

export default Review;
