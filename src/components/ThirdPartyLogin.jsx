import styles from '../styles/ThirdPartyLogin.module.scss';

const ThirdPartyLogin = ({ logo, name }) => {
    return (
        <div className={styles.Container}>
            <div className={styles.ThirdPartyLogin}>
                <div className={styles.LogoContainer} style={{ backgroundImage: `url(${logo})` }}>
                </div>
                <div className={styles.ThirdPartyName}>
                    <span>{name}</span>
                </div>
            </div>
        </div>
    );
}

export default ThirdPartyLogin;