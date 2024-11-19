import styles from '../styles/ConfirmationChip.module.scss';
import Check from '../assets/check.png';

const ConfirmationChip = ({ label, onClick }) => {
    return (
        <div className={styles.ConfirmationChip} onClick={onClick}>
            <div className={styles.logoContainer}>
                <img src={Check} width='50%' alt="" />
            </div>
            <div className={styles.textContainer}>
                <p>{label}</p>
            </div>
        </div>
    );
}

export default ConfirmationChip;