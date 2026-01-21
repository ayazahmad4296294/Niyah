import mongoose from 'mongoose';

const inspect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/niyah_db');
        const db = mongoose.connection.useDb('niyah_db').db;
        const collections = await db.listCollections().toArray();
        console.log('Collections in niyah_db:');
        collections.forEach(col => console.log(` - ${col.name}`));
        
        const count = await db.collection('niyah_users').countDocuments();
        console.log(`Document count in 'niyah_users': ${count}`);
        
        await mongoose.disconnect();
    } catch (error) {
        console.error('Error:', error);
    }
};

inspect();
