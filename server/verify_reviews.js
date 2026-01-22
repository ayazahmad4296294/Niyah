const verifyReviewSystem = async () => {
    const baseUrl = 'http://localhost:5002/api';
    const email = `reviewer_${Date.now()}@example.com`;
    const password = 'password123';
    let token;

    console.log('--- Step 1: Register a new user ---');
    const regRes = await fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Reviewer Hero', email, password })
    });
    console.log('Register Status:', regRes.status);

    console.log('\n--- Step 2: Login to get token ---');
    const loginRes = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    const loginData = await loginRes.json();
    token = loginData.token;
    console.log('Login Status:', loginRes.status);
    console.log('Token received:', !!token);

    if (!token) {
        console.error('Failed to get token, stopping test.');
        return;
    }

    console.log('\n--- Step 3: Submit a review with token ---');
    const reviewRes = await fetch(`${baseUrl}/reviews`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            companyId: 'comp_123',
            name: 'Reviewer Hero',
            email: email,
            rating: 5,
            reviewText: 'Great service! Highly recommended.'
        })
    });
    const reviewData = await reviewRes.json();
    console.log('Review Status:', reviewRes.status);
    console.log('Review Data:', JSON.stringify(reviewData, null, 2));

    console.log('\n--- Step 4: Submit a review WITHOUT token (should fail) ---');
    const failRes = await fetch(`${baseUrl}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            companyId: 'comp_123',
            name: 'Malice',
            email: 'malice@ext.com',
            rating: 1,
            reviewText: 'This should fail'
        })
    });
    const failData = await failRes.json();
    console.log('Fail Status:', failRes.status);
    console.log('Fail Data:', JSON.stringify(failData, null, 2));
};

verifyReviewSystem();
