import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true // To avoid duplicates during seeding
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    collection: 'blogdata'
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
