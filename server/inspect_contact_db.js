import mongoose from 'mongoose';
import ContactUsForm from './models/ContactUsForm.js';
import dotenv from 'dotenv';
dotenv.config();

const inspectContactDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB:', process.env.MONGO_URI);

        const count = await ContactUsForm.countDocuments();
        console.log(`Total Documents in 'contactusform': ${count}`);

        const contacts = await ContactUsForm.find().sort({ createdAt: -1 });
        console.log(JSON.stringify(contacts, null, 2));

    } catch (error) {
        console.error('DB Error:', error);
    } finally {
        await mongoose.disconnect();
    }
};

inspectContactDB();
