import React, { useState } from 'react';
import styles from '../styles/Login.module.scss';
import * as Components from '../components/index';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [modals, setModals] = useState({
        isFirstModalVisible: false,
        isSecondModalVisible: false,
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [recoverEmail, setRecoverEmail] = useState('');
    const [recoverErrorMessage, setRecoverErrorMessage] = useState('');

    const navigate = useNavigate();

    const toggleModal = (modalName) => {
        setModals((prev) => ({
            ...prev,
            [modalName]: !prev[modalName],
        }));
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleRecoverPassword = () => {
        if (!isValidEmail(recoverEmail)) {
            setRecoverErrorMessage('Por favor, ingresa un correo electrónico válido.');
            return;
        }
        setRecoverErrorMessage('');
        toggleModal('isFirstModalVisible');
        toggleModal('isSecondModalVisible');
    };

    const handleLogin = async () => {
        if (!isValidEmail(email)) {
            setErrorMessage('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        if(!password) {
            setErrorMessage('Por favor, ingresa tu contraseña.');
            return;
        }

        setErrorMessage('');
        try {
            const response = await fetch ('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            
            if(!response.ok){
                throw new Error('Usuario o contraseña incorrectos.');
            }

            const data = await response.json();
            console.log('Login exitoso', data);
            navigate('/home');
        }catch (error) {
            console.error('Ocurrió un error al iniciar sesión', error);
            setErrorMessage(error.message);
        }
    };

    return (
        <div className={styles.MainContainer}>
            <Components.GreyContainer height="100%" width="30%">
                <div className={styles.ElementsContainer}>
                    <div>
                        <Components.Subtittle text="Ingresa a" />
                        <Components.Tittle text="Onboard Pro" />
                        <hr />
                        <Components.Input
                            name="email"
                            placeholder="Correo"
                            width="100%"
                            height="6vh"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Components.Input
                            name="password"
                            type="password"
                            placeholder="Contraseña"
                            width="100%"
                            height="6vh"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className={styles.ErrorMessage}>
                            {errorMessage && (
                                <span className={styles.errorMessage}>{errorMessage}</span>
                            )}
                        </div>
                        <Components.ConfirmationButton
                            width="100%"
                            height="5vh"
                            text="Ingresar"
                            onClick={handleLogin}
                        />
                        <hr />
                    </div>
                    <Components.ForgotPasswordFooter
                        onClick={() => toggleModal('isFirstModalVisible')}
                    />
                </div>
            </Components.GreyContainer>

            <Components.Modal
                isVisible={modals.isFirstModalVisible}
                tittle="Recupera tu contraseña"
                width="30%"
                height="20%"
                onClose={() => toggleModal('isFirstModalVisible')}
            >
                <p>
                    Ingresa tu correo y te enviaremos instrucciones para restablecer tu contraseña.
                </p>
                <div className={styles.ResetPasswordForm}>
                    <Components.Input
                        placeholder="Correo"
                        width="70%"
                        height="100%"
                        value={recoverEmail}
                        onChange={(e) => setRecoverEmail(e.target.value)}
                    />
                    <Components.ConfirmationButton
                        width="20%"
                        height="100%"
                        text="Enviar"
                        onClick={handleRecoverPassword}
                    />
                </div>
                <div className={styles.ErrorMessage}>
                    {recoverErrorMessage && (
                        <span className={styles.recoverErrorMessage}>{recoverErrorMessage}</span>
                    )}
                </div>
            </Components.Modal>

            <Components.Modal
                isVisible={modals.isSecondModalVisible}
                tittle="Instrucciones enviadas"
                width="30%"
                height="20%"
                onClose={() => toggleModal('isSecondModalVisible')}
            >
                <p>
                    Si <b>{recoverEmail}</b> se encuentra registrado en nuestro sistema, te
                    enviaremos un correo con las instrucciones para restablecer tu contraseña.
                </p>
                <Components.ConfirmationButton
                        width="40%"
                        height="5vh"
                        text="Entendido"
                        onClick={() => toggleModal('isSecondModalVisible')}
                />
            </Components.Modal>
        </div>
    );
};

export default Login;