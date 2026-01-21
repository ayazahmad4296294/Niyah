import mongoose from 'mongoose';

const checkFinal = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/niyah_db');
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log('Final Collections in niyah_db:');
        collections.forEach(col => console.log(` - ${col.name}`));
        await mongoose.disconnect();
    } catch (error) {
        console.error('Error:', error);
    }
};

checkFinal();
