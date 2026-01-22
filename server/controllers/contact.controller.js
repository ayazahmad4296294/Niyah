 import ContactUsForm from '../models/ContactUsForm.js';

// @desc    Submit Contact Us Form
// @route   POST /api/contact
// @access  Public
export const submitContactForm = async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Validate missing fields
    if (!name || !email || !phone || !message) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    try {
        const newContact = new ContactUsForm({
            name,
            email,
            phone,
            message
        });

        await newContact.save();

        res.status(201).json({
            success: true,
            message: "Contact message submitted successfully"
        });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};
