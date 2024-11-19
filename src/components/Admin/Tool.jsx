import styles from '../../styles/Admin/Tool.module.scss';
import GreyContainer from '../GreyContainer';

const Tool = ( {tittle, onclick} ) => {
    return (
        <div className={styles.ToolContainer}>
            {tittle}
        </div>
    );
}

export default Tool;