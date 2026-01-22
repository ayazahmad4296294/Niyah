const verifyBackend = async () => {
    const baseUrl = 'http://localhost:5002/api';
    const email = `tester_${Date.now()}@example.com`;
    const password = 'password123';
    let token;

    console.log('--- Step 1: Register/Login ---');
    // Register
    await fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Tester', email, password })
    });
    // Login
    const loginRes = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    const loginData = await loginRes.json();
    token = loginData.token;
    console.log('Got Token:', !!token);

    if (!token) return;

    // Helper to safely log response
    const logResponse = async (label, res) => {
        console.log(`${label} Status:`, res.status);
        try {
            const data = await res.json();
            console.log(`${label} Body:`, data);
        } catch (e) {
            console.log(`${label} Body (Non-JSON):`, await res.text());
        }
    };

    console.log('\n--- Step 2: Rate a Company (Authorized) ---');
    const rateRes = await fetch(`${baseUrl}/ratings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            companyId: 'comp_123',
            fullName: 'Tester One',
            email: email,
            rating: 5,
            message: 'Excellent service!'
        })
    });
    await logResponse('Rate', rateRes);

    console.log('\n--- Step 3: Rate a Company (Unauthorized) ---');
    const rateFail = await fetch(`${baseUrl}/ratings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyId: 'comp_123', rating: 5 })
    });
    console.log('Rate Unauth Status:', rateFail.status);

    console.log('\n--- Step 4: File a Complaint (Authorized) ---');
    const compRes = await fetch(`${baseUrl}/complaints`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            companyId: 'comp_123',
            fullName: 'Tester One',
            email: email,
            rating: 1,
            complaintType: 'service issue',
            message: 'Very bad experience.'
        })
    });
    await logResponse('Complaint', compRes);

    console.log('\n--- Step 5: Complaint Validation (Invalid Type) ---');
    const compFail = await fetch(`${baseUrl}/complaints`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            companyId: 'comp_123',
            fullName: 'Tester One',
            email: email,
            rating: 1,
            complaintType: 'INVALID_TYPE',
            message: 'Bad type.'
        })
    });
    await logResponse('Complaint Invalid', compFail);
};

verifyBackend();
