import React, { useState } from 'react';
import styles from '../styles/Login.module.scss';
import * as Components from '../components/index';
import { useNavigate } from 'react-router-dom';
import { handleLogin } from '../controllers/loginController';
import { useAuth } from '../controllers/authContext';

const Login = () => {
    const { setUserData } = useAuth();
    const [modals, setModals] = useState({
        isFirstModalVisible: false,
        isSecondModalVisible: false,
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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

    const handleLoginWrapper = async () => {
        setIsLoading(true);
        await handleLogin({
            email,
            password,
            navigate,
            setErrorMessage,
            isValidEmail,
            setUserData 
        });
        setIsLoading(false);
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
                            text={isLoading ? <div className={styles.spinner}></div> : "Ingresar"}
                            isDisabled={isLoading}
                            onClick={isLoading ? null : handleLoginWrapper}
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