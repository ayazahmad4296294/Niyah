import mongoose from 'mongoose';

const inspectAll = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/admin');
        console.log('Connected to MongoDB (admin)');

        const admin = mongoose.connection.useDb('admin').db.admin();
        const dbs = await admin.listDatabases();
        
        console.log('\n--- Databases and Collections ---');
        for (const dbInfo of dbs.databases) {
            const dbName = dbInfo.name;
            if (['admin', 'config', 'local'].includes(dbName)) continue;

            const db = mongoose.connection.useDb(dbName);
            const collections = await db.db.listCollections().toArray();
            console.log(`\nDatabase: ${dbName}`);
            if (collections.length === 0) {
                console.log('  (No collections)');
            } else {
                collections.forEach(col => console.log(`  - ${col.name}`));
            }
        }

        await mongoose.disconnect();
    } catch (error) {
        console.error('Error:', error);
    }
};

inspectAll();
