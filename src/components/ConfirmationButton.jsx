import styles from '../styles/ConfirmationButton.module.scss';

const ConfirmationButton = ({ width, height, text, onClick, children, isDisabled}) => {
    if (isDisabled == false){
        return (
            <button 
                className={styles.ConfirmationButton}
                style={{ width: width, height: height, }}
                onClick={onClick}
            >
                {text}
                {children}
            </button>
        );
    }else{
        return (
            <button 
                className={styles.ConfirmationButtonDisabled}
                style={{ width: width, height: height, }}
                onClick={onClick}
            >
                {text}
                {children}
            </button>
        );
    }
}

export default ConfirmationButton;
