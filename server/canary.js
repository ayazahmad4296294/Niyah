import mongoose from 'mongoose';

const createCanary = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/niyah_db');
        const db = mongoose.connection.db;
        
        // Create a uniquely named collection
        const colName = '___CANARY_COLLECTION_FOR_VERIFICATION___';
        await db.createCollection(colName);
        console.log(`Created canary collection: ${colName}`);
        
        // Add a document
        await db.collection(colName).insertOne({ message: 'If you see this, you are in the right database!', timestamp: new Date() });
        console.log('Inserted document into canary collection.');

        await mongoose.disconnect();
    } catch (error) {
        console.error('Error:', error);
    }
};

createCanary();
