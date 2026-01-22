import mongoose from 'mongoose';

const ContactUsFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
    },
    message: {
        type: String,
    }
}, {
    timestamps: true, // This automatically handles createdAt and updatedAt
    collection: 'contactusform'
});

const ContactUsForm = mongoose.model('ContactUsForm', ContactUsFormSchema);

export default ContactUsForm;
