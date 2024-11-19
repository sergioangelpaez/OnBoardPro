import styles from '../styles/CloseButton.module.scss';

const CloseButton = ({ width, height, text, onClick, children }) => {
    return (
        <button 
            className={styles.CloseButton} 
            style={{ width: width, height: height }}
            onClick={onClick}
        >
            {text}
            {children}
        </button>
    );
}

export default CloseButton;
