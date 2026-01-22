import express from 'express';
import Company from '../models/Company.js';
import { getCompanyReviews } from '../controllers/review.controller.js';

const router = express.Router();

// Dummy data for seeding (from src/data/companyData.js)
const companiesData = [
    {
        category: "Technology",
        name: "Bruce Hopkins Co",
        description: "Est sunt nostrud asp",
        email: "contact@brucehopkins.com",
        website: "www.brucehopkins.com",
        phone: "+1 234 567 890",
        address: "123 Tech Lane, Silicon Valley, CA",
        location: { lat: 37.7749, lng: -122.4194 },
        verificationStatus: "Verified",
        trustScore: 4.8
    },
    {
        category: "Technology",
        name: "Levine and Lancaster LLC",
        description: "Incidunt tempor qua",
        email: "info@levinelancaster.com",
        website: "www.levinelancaster.com",
        phone: "+1 345 678 901",
        address: "456 Innovation Dr, Austin, TX",
        location: { lat: 30.2672, lng: -97.7431 },
        verificationStatus: "Verified",
        trustScore: 4.5
    },
    {
        category: "Technology",
        name: "Hill and Fisher LLC",
        description: "Similique ratione si",
        email: "hello@hillfisher.com",
        website: "www.hillfisher.com",
        phone: "+1 456 789 012",
        address: "789 Future St, Seattle, WA",
        location: { lat: 47.6062, lng: -122.3321 },
        verificationStatus: "Pending",
        trustScore: 3.9
    },
    {
        category: "Technology",
        name: "Bartlett Horn LLC",
        description: "Aute quisquam dolore",
        email: "support@bartletthorn.com",
        website: "www.bartletthorn.com",
        phone: "+1 567 890 123",
        address: "101 Code Ave, New York, NY",
        location: { lat: 40.7128, lng: -74.0060 },
        verificationStatus: "Verified",
        trustScore: 4.2
    },
    {
        category: "Finance",
        name: "Acme Finance Corp",
        description: "Secure and reliable finance",
        email: "info@acmefinance.com",
        website: "www.acmefinance.com",
        phone: "+1 678 901 234",
        address: "202 Wall St, New York, NY",
        location: { lat: 40.7060, lng: -74.0088 },
        verificationStatus: "Verified",
        trustScore: 4.9
    },
    {
        category: "Healthcare",
        name: "HealthConnect Systems",
        description: "Modern healthcare solutions",
        email: "contact@healthconnect.com",
        website: "www.healthconnect.com",
        phone: "+1 789 012 345",
        address: "303 Care Blvd, Boston, MA",
        location: { lat: 42.3601, lng: -71.0589 },
        verificationStatus: "Verified",
        trustScore: 4.7
    },
    {
        category: "Real Estate",
        name: "Urban Living Realty",
        description: "Luxury real estate experts",
        email: "sales@urbanliving.com",
        website: "www.urbanliving.com",
        phone: "+1 890 123 456",
        address: "404 Estate Way, Los Angeles, CA",
        location: { lat: 34.0522, lng: -118.2437 },
        verificationStatus: "Pending",
        trustScore: 4.1
    },
    {
        category: "Education",
        name: "EduBase Learning",
        description: "Innovative learning platforms",
        email: "admin@edubase.com",
        website: "www.edubase.com",
        phone: "+1 901 234 567",
        address: "505 Scholar Ct, Chicago, IL",
        location: { lat: 41.8781, lng: -87.6298 },
        verificationStatus: "Verified",
        trustScore: 4.6
    },
    {
        category: "Retail",
        name: "Global Goods Retail",
        description: "Direct-to-consumer excellence",
        email: "orders@globalgoods.com",
        website: "www.globalgoods.com",
        phone: "+1 012 345 678",
        address: "606 Retail Plaza, Miami, FL",
        location: { lat: 25.7617, lng: -80.1918 },
        verificationStatus: "Verified",
        trustScore: 4.4
    },
    {
        category: "Energy",
        name: "GreenEnergy Solutions",
        description: "Sustainable energy for all",
        email: "info@greenenergy.com",
        website: "www.greenenergy.com",
        phone: "+1 123 456 789",
        address: "707 Solar Dr, Denver, CO",
        location: { lat: 39.7392, lng: -104.9903 },
        verificationStatus: "Verified",
        trustScore: 4.9
    },
    {
        category: "Marketing",
        name: "Apex Digital Media",
        description: "Data-driven marketing results",
        email: "hello@apexmedia.com",
        website: "www.apexmedia.com",
        phone: "+1 234 567 890",
        address: "808 Ad Way, San Francisco, CA",
        location: { lat: 37.7749, lng: -122.4194 },
        verificationStatus: "Verified",
        trustScore: 4.3
    },
    {
        category: "Legal",
        name: "Justice Partners LLC",
        description: "Expert legal representation",
        email: "legal@justicepartners.com",
        website: "www.justicepartners.com",
        phone: "+1 345 678 901",
        address: "909 Law St, Washington, DC",
        location: { lat: 38.9072, lng: -77.0369 },
        verificationStatus: "Verified",
        trustScore: 4.8
    }
];

// @route   POST /api/companies/seed
// @desc    Seed companies data
// @access  Public (Dev only)
router.post('/seed', async (req, res) => {
    try {
        // Clear existing companies to prevent duplicates during testing/dev
        // OR verify existence one by one. For this task, let's just loop and upsert

        let createdCount = 0;

        for (const company of companiesData) {
            const exists = await Company.findOne({ name: company.name });
            if (!exists) {
                await Company.create(company);
                createdCount++;
            }
        }

        res.json({ message: `Seeding complete. Added ${createdCount} new companies.` });
    } catch (error) {
        console.error('Seed error:', error);
        res.status(500).json({ message: 'Server error during seeding' });
    }
});

// @route   GET /api/companies
// @desc    Get all companies with pagination
// @access  Public
router.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const skip = (page - 1) * limit;

        const totalItems = await Company.countDocuments();
        const companies = await Company.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        res.json({
            success: true,
            data: companies,
            pagination: {
                totalItems,
                totalPages: Math.ceil(totalItems / limit),
                currentPage: page,
                limit
            }
        });
    } catch (error) {
        console.error('Fetch companies error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   GET /api/companies/:id/reviews
// @desc    Get reviews for a specific company with pagination
// @access  Public
router.get('/:companyId/reviews', getCompanyReviews);

// @route   GET /api/companies/:id
// @desc    Get single company by ID
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.json(company);
    } catch (error) {
        console.error('Fetch company error:', error);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
