import styles from '../styles/Login.module.scss';
import * as Components from '../components/index';
import ThirdPartyLogin from '../components/ThirdPartyLogin';
import microsoftLogo from '../assets/microsoft-logo.png';
import googleLogo from '../assets/google-logo.png';

const Login = () => {
    return (
        <div className={styles.MainContainer}>
            <Components.GreyContainer height="80%" width="25%">
                <div>
                    <Components.Subtittle text='Ingresa a'></Components.Subtittle>
                    <Components.Tittle text='Studify'></Components.Tittle>
                    <hr />
                    <div>
                        <Components.Input width='100%' height='6vh' type='email' placeholder='Correo'/>
                        <Components.Input width='100%' height='6vh' type='password' placeholder='Contraseña'/>
                    </div>
                    <Components.ConfirmationButton width='100%' height='5vh' text='Ingresar'></Components.ConfirmationButton>
                    <hr />
                </div>
                <div>
                    <ThirdPartyLogin logo={microsoftLogo} name='Ingresa con Microsoft'/>
                    <ThirdPartyLogin logo={googleLogo} name='Ingresa con Google'/>
                </div>
            </Components.GreyContainer>    
        </div>
    );
}

export default Login;