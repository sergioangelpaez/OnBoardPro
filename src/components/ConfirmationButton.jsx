import styles from '../styles/ConfirmationButton.module.scss';

const ConfirmationButton = ({ width, height, text, onClick, children }) => {
    return (
        <button 
            className={styles.ConfirmationButton} 
            style={{ width: width, height: height }}
            onClick={onClick}
        >
            {text}
            {children}
        </button>
    );
}

export default ConfirmationButton;
