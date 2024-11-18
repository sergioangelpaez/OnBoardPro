import styles from '../styles/Modal.module.scss';
import CloseButton from "./CloseButton";

const Modal = ({ isVisible, children, tittle, width, height, onClose }) => {
    if (!isVisible) return null;

    return (
        <div 
            className={styles.ModalOpacityLayer} 
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div 
                className={styles.Modal} 
                style={{ height, width }} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.ModalHeader}>
                    <div className={styles.ModalTittle}>
                        <span>{tittle}</span>
                    </div>
                    <div className={styles.dividerContainer}>
                        <hr />
                    </div>
                    <div className={styles.closeButtonContainer}>
                        <CloseButton width="30px" height="30px" text="X" onClick={onClose} />
                    </div>
                </div>
                <div className={styles.ModalContent}>
                    {children}
                </div>
                <div className={styles.ModalFooter}>
                    <div className={styles.ModalFooterHelp}>
                        <a href=""><span>Ayuda</span></a>
                    </div>
                    <div className={styles.dividerContainer}>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;