import styles from '../styles/ForgotPasswordFooter.module.scss';

const ForgotPasswordFooter = ({onClick}) => {
    return (
        <span onClick={onClick}className={styles.ForgotPasswordFooter}>¿Olvidaste tu contraseña?</span>
    );
}

export default ForgotPasswordFooter;