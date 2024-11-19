import styles from '../../styles/Admin/Tool.module.scss';

const Tool = ( {tittle, onClick} ) => {
    return (
        <div className={styles.ToolContainer}
            onClick={onClick}
        >
            {tittle}
        </div>
    );
}

export default Tool;