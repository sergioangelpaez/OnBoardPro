import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/Login.module.scss';
import * as Components from '../components/index';
import ThirdPartyLogin from '../components/ThirdPartyLogin';
import googleLogo from '../assets/google-logo.png';

const Login = () => {
    const [email, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email || !password) {
            console.warn("Por favor, completa todos los campos."); // Mensaje en la consola o podrías mostrar un mensaje en la UI.
            alert("Por favor, completa todos los campos.");
            return;
        }
    
        console.log("Botón de login presionado"); 
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/auth/localuser`,
                { email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );
    
            if (response.status === 200) {
                console.log("Inicio de sesión exitoso");
                navigate('/SuperadminGui');
            } else {
                let errorMessage = response.data || 'Error en el inicio de sesión';
                alert(errorMessage);
                console.error('Error en el inicio de sesión');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <div className={styles.MainContainer}>
            <Components.GreyContainer height="80%" width="25%">
                <div className={styles.ElementsContainer}>
                    <div>
                        <Components.Subtittle text='Ingresa a' />
                        <Components.Tittle text='Onboard Pro' />
                        <hr />
                        <Components.Input
                            width='100%'
                            height='6vh'
                            type='user'
                            placeholder='Correo'
                            value={email}
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <Components.Input
                            width='100%'
                            height='6vh'
                            type='password'
                            placeholder='Contraseña'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Components.ConfirmationButton
                            width='100%'
                            height='5vh'
                            text='Ingresar'
                            onClick={handleLogin} // Aquí aseguramos que handleLogin está asignado
                        />
                        <hr />
                        <ThirdPartyLogin logo={googleLogo} name='Ingresa con Google' />
                    </div>
                    <Components.ForgotPasswordFooter />
                </div>
            </Components.GreyContainer>
        </div>
    );
};

export default Login;
