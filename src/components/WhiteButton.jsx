import styles from '../styles/WhiteButton.module.scss';

const WhiteButton = ({ text, onClick, width = '100px', height = '40px' }) => {
    return (
        <button 
            className={styles.WhiteButton} 
            onClick={onClick} 
            style={{ width: width, height: height }}
        >
            {text}
        </button>
    );
}

export default WhiteButton;
