import GreyContainer from "./GreyContainer";
import styles from '../styles/Modal.module.scss';
import CloseButton from "./CloseButton";

const Modal = ({ isVisible, children}) => {
    if (!isVisible) return null;

    return (
        <div className={styles.Modal}>
            <GreyContainer height="100%" width="100%">
                <div className={styles.ModalHeader}>
                    <div className={styles.dividerContainer}>
                        <hr />
                    </div>
                    <div className={styles.closeButtonContainer}>
                        <CloseButton width="30px" height="30px" text="X" onClick={() => {}} />
                    </div>
                </div>
                <div className="modal-content">
                    {children}
                </div>
            </GreyContainer>
        </div>
    );
}

export default Modal;