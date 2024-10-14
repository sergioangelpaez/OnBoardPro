import styles from '../styles/Subtittle.module.scss';

const Tittle = ( {text} ) => {
    return (
        <span className={styles.Subtittle}>{text}</span>
    );
}

export default Tittle;