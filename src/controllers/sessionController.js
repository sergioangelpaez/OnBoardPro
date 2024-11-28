export const retrieveSessionCookie = async () => {
    try {
        const response = await fetch('https://onboardpro.onrender.com/api/auth/cookie', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            window.location.href = '/';
            return null;
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error.message);
        window.location.href = '/';
        return null;
    }
};