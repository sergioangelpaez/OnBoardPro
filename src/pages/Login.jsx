import React, { useState } from 'react';
import styles from '../styles/Login.module.scss';
import * as Components from '../components/index';

const Login = () => {
    const [email, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={styles.MainContainer}>
            <Components.GreyContainer height="100%" width="30%">
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
                        />
                        <hr />
                    </div>
                    <Components.ForgotPasswordFooter />
                </div>
            </Components.GreyContainer>
        </div>
    );
};

export default Login;
