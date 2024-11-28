export const handleLogin = async ({ email, password, navigate, setErrorMessage, isValidEmail, setUserData }) => {
    if (!isValidEmail(email)) {
        setErrorMessage('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    if (!password) {
        setErrorMessage('Por favor, ingresa tu contraseña.');
        return;
    }

    setErrorMessage('');
    try {
        const response = await fetch('https://onboardpro.onrender.com/api/auth/localuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Usuario o contraseña incorrectos.');
        }

        const data = await response.json();

        setUserData(data);
        console.log(data);

        navigate('/home');
    } catch (error) {
        setErrorMessage(error.message);
    }
};