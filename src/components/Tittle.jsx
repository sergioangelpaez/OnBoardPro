import styles from '../styles/Tittle.module.scss';

const Tittle = ( {text} ) => {
    return (
        <h1 className={styles.Tittle}>{text}</h1>
    );
}

export default Tittle;