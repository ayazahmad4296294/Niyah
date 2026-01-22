
import ContactUsForm from './models/ContactUsForm.js';

const testContactAPI = async () => {
    console.log('Testing Contact API via 127.0.0.1...');
    try {
        const payload = {
            name: 'API Test User',
            email: 'apitest@example.com',
            phone: '1234567890',
            message: 'This is a test message from the API script.'
        };

        const response = await fetch('http://127.0.0.1:5002/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        console.log('Status Code:', response.status);
        console.log('Response Body:', JSON.stringify(data, null, 2));

    } catch (error) {
        console.error('Fetch Error:', error);
    }
};

testContactAPI();
