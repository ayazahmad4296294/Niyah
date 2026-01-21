
import mongoose from 'mongoose';
import User from './models/User.js';

const verify = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/niyah_db');
        console.log('Connected to MongoDB');

        const users = await User.find({});
        console.log(`Found ${users.length} users in 'users' collection.`);

        users.forEach(u => {
            console.log('------------------------------------------------');
            console.log(`ID: ${u._id}`);
            console.log(`Name: ${u.name}`);
            console.log(`Email: ${u.email}`);
            console.log(`Password (Hash): ${u.password}`);
            const isHashed = u.password.startsWith('$2');
            console.log(`Is Hashed (starts with $2): ${isHashed}`);
        });

        await mongoose.disconnect();
    } catch (error) {
        console.error('Error:', error);
    }
};

verify();
