import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

// @route   POST /api/blogs/seed
// @desc    Seed initial blog data (text-only)
// @access  Public (for initial setup)
router.post('/seed', async (req, res) => {
    try {
        const blogsToSeed = [
            {
                title: "Understanding Ethical Leadership in Modern Organizations",
                date: "November 12, 2026",
                time: "10:00 PM"
            },
            {
                title: "The Role of Transparency in Building Stakeholder Trust",
                date: "November 10, 2026",
                time: "02:30 PM"
            },
            {
                title: "How to Foster a Culture of Continuous Feedback",
                date: "November 08, 2026",
                time: "11:15 AM"
            },
            {
                title: "Aligning Business Actions with Core Organizational Values",
                date: "November 05, 2026",
                time: "09:00 AM"
            }
        ];

        let seededCount = 0;
        for (const blog of blogsToSeed) {
            const exists = await Blog.findOne({ title: blog.title });
            if (!exists) {
                await Blog.create(blog);
                seededCount++;
            }
        }

        res.json({
            success: true,
            message: `Seeded ${seededCount} new blogs.`,
            total: await Blog.countDocuments()
        });
    } catch (error) {
        console.error('Seeding error:', error);
        res.status(500).json({
            success: false,
            message: "Failed to seed blogs",
            error: error.message
        });
    }
});

// @route   GET /api/blogs
// @desc    Get all blogs (latest first)
// @access  Public
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.json({
            success: true,
            data: blogs
        });
    } catch (error) {
        console.error('Fetch blogs error:', error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch blogs",
            error: error.message
        });
    }
});

export default router;
