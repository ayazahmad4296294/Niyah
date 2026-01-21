
// Native fetch used

const register = async () => {
    try {
        const response = await fetch('http://localhost:5002/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'TestScript User',
                email: 'script_test@example.com',
                password: 'password123'
            })
        });
        const data = await response.json();
        console.log('Status:', response.status);
        console.log('Data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
};

register();
