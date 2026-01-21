const registerAndVerify = async () => {
    const uniqueEmail = `audit_${Date.now()}@example.com`;
    try {
        const response = await fetch('http://localhost:5002/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Audit User',
                email: uniqueEmail,
                password: 'password123'
            })
        });
        const data = await response.json();
        console.log('Register Status:', response.status);
        console.log('Register Data:', data);

        // Now verify where it went
        const mongoose = (await import('mongoose')).default;
        await mongoose.connect('mongodb://localhost:27017/niyah_db');
        const db = mongoose.connection.db;
        const col = db.collection('users');
        const user = await col.findOne({ email: uniqueEmail });
        
        if (user) {
            console.log(`CONFIRMED: User found in 'niyah_db' -> 'users' collection.`);
        } else {
            console.log(`FAILED: User NOT found in 'niyah_db' -> 'users' collection.`);
        }
        await mongoose.disconnect();
    } catch (error) {
        console.error('Error:', error);
    }
};

registerAndVerify();
