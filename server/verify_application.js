import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_URL = 'http://localhost:5002/api';

const testApplication = async () => {
    try {
        console.log('--- Phase 1: Authentication ---');
        // Register test user
        try {
            await axios.post(`${API_URL}/auth/register`, {
                name: "Test User",
                email: "testapp@example.com",
                password: "password123"
            });
            console.log('Test user registered.');
        } catch (err) {
            console.log('User might already exist, proceeding to login...');
        }

        // Login as test user
        const loginRes = await axios.post(`${API_URL}/auth/login`, {
            email: "testapp@example.com",
            password: "password123"
        });

        const token = loginRes.data.token;
        console.log('Login successful, token obtained.');

        console.log('\n--- Phase 2: Unauthorized Request ---');
        try {
            await axios.post(`${API_URL}/companyapplications`, {});
        } catch (err) {
            console.log('Unauthorized request rejected correctly (401):', err.response?.data?.message);
        }

        console.log('\n--- Phase 3: Authorized Submission ---');
        const appData = {
            companyName: "Test Company",
            companyUrl: "https://test.com",
            country: "USA",
            industries: ["Tech", "Solar"],
            employeesCount: "10-50",
            address: "123 Test St",
            contactName: "John Doe",
            contactRole: "Founder",
            contactEmail: "john@test.com",
            contactPhone: "1234567890",
            purpose: "Testing the backend",
            declarationAccepted: true,
            preScreeningCall: true
        };

        const appRes = await axios.post(`${API_URL}/companyapplications`, appData, {
            headers: { Authorization: `Bearer ${token}` }
        });

        console.log('Application submitted successfully:', appRes.data.success);
        console.log('Response Message:', appRes.data.message);
        console.log('Saved ID:', appRes.data.data?._id);

    } catch (error) {
        console.error('Test failed:', error.response?.data || error.message);
    }
};

testApplication();
