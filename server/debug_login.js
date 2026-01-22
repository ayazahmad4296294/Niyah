import mongoose from 'mongoose';
import User from './models/User.js';
import dotenv from 'dotenv';
dotenv.config();

const debugLogin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB');

        const email = 'test@example.com'; 
        const password = 'password123';

        // 1. Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found. Creating test user...');
            const newUser = await User.create({
                name: 'Test User',
                email,
                password
            });
            console.log('Test user created:', newUser);
            return;
        }

        console.log('User found:', user.email);

        // 2. Test matchPassword method
        console.log('Testing password match...');
        try {
            const isMatch = await user.matchPassword(password);
            console.log('Password match result:', isMatch);
        } catch (err) {
            console.error('Error in matchPassword:', err);
        }

    } catch (error) {
        console.error('General Error:', error);
    } finally {
        await mongoose.disconnect();
    }
};

debugLogin();
