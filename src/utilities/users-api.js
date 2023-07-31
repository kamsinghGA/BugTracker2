const BASE_URL = '/api/users';

export async function signUp(userData) {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });
    if (res.ok) {
        const data = await res.json();
        return data.user; // this object has the user property
    } else {
        throw new Error('Invalid Sign Up');
    }
}