import styles from '../styles/ConfirmationButton.module.scss';

const ConfirmationButton = ({ width, height, text, onClick }) => {
    return (
        <button 
            className={styles.ConfirmationButton} 
            style={{ width: width, height: height }}
            onClick={onClick} // Asegúrate de pasar la prop onClick aquí
        >
            {text}
        </button>
    );
}

export default ConfirmationButton;
