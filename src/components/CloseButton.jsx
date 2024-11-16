import styles from '../styles/CloseButton.module.scss';

const CloseButton = ({ width, height, text, onClick }) => {
    return (
        <button 
            className={styles.CloseButton} 
            style={{ width: width, height: height }}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default CloseButton;
