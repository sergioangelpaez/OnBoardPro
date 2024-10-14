import styles from '../styles/ConfirmationButton.module.scss';

const ConfirmationButton = ({ width, height, text }) => {
    return (
        <button 
            className={styles.ConfirmationButton} 
            style={{ width: width, height: height }}
        >
            {text}
        </button>
    );
}

export default ConfirmationButton;