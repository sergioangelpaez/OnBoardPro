import styles from '../styles/GreyContainer.module.scss';

const GreyContainer = ({ height, width, children }) => {
    return(
        <div 
            className={styles.GreyContainer} 
            style={{height: height, width: width}}
        >
            {children}
        </div>
    );
}

export default GreyContainer;