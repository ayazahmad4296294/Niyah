const testContactForm = async () => {
    const url = 'http://localhost:5002/api/contact';
    
    console.log('--- Testing Valid Submission ---');
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Jane Doe',
                email: 'jane@example.com',
                phone: '1234567890',
                message: 'Hello, this is a test message.'
            })
        });
        const data = await response.json();
        console.log('Status:', response.status);
        console.log('Data:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error:', error);
    }

    console.log('\n--- Testing Invalid Submission (Missing Field) ---');
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Jane Doe',
                email: 'jane@example.com',
                // phone is missing
                message: 'Hello, this is a test message.'
            })
        });
        const data = await response.json();
        console.log('Status:', response.status);
        console.log('Data:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error:', error);
    }
};

testContactForm();
