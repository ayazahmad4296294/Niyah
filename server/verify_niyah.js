const verifyInNiyah = async () => {
    const uniqueEmail = `final_audit_${Date.now()}@example.com`;
    try {
        console.log(`Registering user with email: ${uniqueEmail}`);
        const response = await fetch('http://localhost:5002/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Final Audit User',
                email: uniqueEmail,
                password: 'password123'
            })
        });
        const data = await response.json();
        console.log('Register Status:', response.status);
        console.log('Register Data:', data);

        // Now verify where it went
        const mongoose = (await import('mongoose')).default;
        await mongoose.connect('mongodb://localhost:27017/Niyah');
        const db = mongoose.connection.db;
        const collections = await db.listCollections().toArray();
        console.log('\nCollections in Niyah database:');
        collections.forEach(col => console.log(` - ${col.name}`));

        const user = await db.collection('niyah_users').findOne({ email: uniqueEmail });
        if (user) {
            console.log(`\nSUCCESS: User found in 'Niyah' -> 'niyah_users' collection.`);
        } else {
            console.log(`\nFAILED: User NOT found in 'Niyah' -> 'niyah_users' collection.`);
        }
        await mongoose.disconnect();
    } catch (error) {
        console.error('Error:', error);
    }
};

verifyInNiyah();
